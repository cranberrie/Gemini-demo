import { useMemo } from 'react';
import { Search, Filter, Calendar, MapPin, Clock, ArrowRight, User, Activity, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { SESSIONS, type Session } from '../data/sessions';

export const Catalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get('q') || '';
  const selectedDay = searchParams.get('day') || 'All';
  const selectedCategory = searchParams.get('category') || 'All';
  const selectedSpeaker = searchParams.get('speaker') || 'All';
  const selectedLevel = searchParams.get('level') || 'All';
  const selectedTrack = searchParams.get('track') || 'All';

  const updateFilters = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value === 'All' || value === '') {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const days = ['All', 'Day 1', 'Day 2', 'Day 3'];
  const categories = ['All', 'Keynote', 'Breakout', 'Customer Story', 'Learning Lab'];
  
  const speakers = useMemo(() => 
    ['All', ...Array.from(new Set(SESSIONS.map(s => s.speaker))).sort()], 
    []
  );

  const levels = useMemo(() => 
    ['All', ...Array.from(new Set(SESSIONS.map(s => s.details?.level).filter(Boolean) as string[]))].sort(),
    []
  );

  const tracks = useMemo(() => {
    const allTracks = SESSIONS.flatMap(s => s.details?.tracks || []);
    return ['All', ...Array.from(new Set(allTracks))].sort();
  }, []);

  const filteredSessions = useMemo<Session[]>(() => {
    return SESSIONS.filter(session => {
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        session.title.toLowerCase().includes(q) ||
        session.speaker.toLowerCase().includes(q) ||
        session.description.toLowerCase().includes(q) ||
        session.details?.fullDescription.toLowerCase().includes(q);
      
      const matchesDay = selectedDay === 'All' || session.day === selectedDay;
      const matchesCategory = selectedCategory === 'All' || session.category === selectedCategory;        
      const matchesSpeaker = selectedSpeaker === 'All' || session.speaker === selectedSpeaker;
      const matchesLevel = selectedLevel === 'All' || session.details?.level === selectedLevel;
      const matchesTrack = selectedTrack === 'All' || (session.details?.tracks || []).includes(selectedTrack);

      return matchesSearch && matchesDay && matchesCategory && matchesSpeaker && matchesLevel && matchesTrack;
    });
  }, [searchQuery, selectedDay, selectedCategory, selectedSpeaker, selectedLevel, selectedTrack]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Session Catalog</h1>     
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Explore our schedule of events, keynotes, and workshops.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 mb-8">
          <div className="space-y-6">
            {/* Search */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">      
                <Search className="h-5 w-5 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search sessions, speakers, or topics..."
                className="block w-full pl-10 pr-3 py-3 border border-slate-200 dark:border-slate-700 rounded-xl leading-5 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 sm:text-sm transition-all"      
                value={searchQuery}
                onChange={(e) => updateFilters('q', e.target.value)}
              />
            </div>

            {/* Filter Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Day Filter */}
              <div className="relative">
                <label htmlFor="day-filter" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1 uppercase tracking-wider">Day</label>
                <select
                  id="day-filter"
                  value={selectedDay}
                  onChange={(e) => updateFilters('day', e.target.value)}
                  className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                  {days.map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </select>
                <Calendar className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 text-slate-400" />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <label htmlFor="category-filter" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1 uppercase tracking-wider">Category</label>
                <select
                  id="category-filter"
                  value={selectedCategory}
                  onChange={(e) => updateFilters('category', e.target.value)}
                  className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
                <Filter className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 text-slate-400" />
              </div>

              {/* Speaker Filter */}
              <div className="relative">
                <label htmlFor="speaker-filter" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1 uppercase tracking-wider">Speaker</label>
                <select
                  id="speaker-filter"
                  value={selectedSpeaker}
                  onChange={(e) => updateFilters('speaker', e.target.value)}
                  className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                  {speakers.map((speaker) => (
                    <option key={speaker} value={speaker}>{speaker}</option>
                  ))}
                </select>
                <User className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 text-slate-400" />
              </div>

              {/* Level Filter */}
              <div className="relative">
                <label htmlFor="level-filter" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1 uppercase tracking-wider">Level</label>
                <select
                  id="level-filter"
                  value={selectedLevel}
                  onChange={(e) => updateFilters('level', e.target.value)}
                  className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
                <Activity className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 text-slate-400" />
              </div>

              {/* Track Filter */}
              <div className="relative">
                <label htmlFor="track-filter" className="block text-xs font-medium text-slate-500 dark:text-slate-400 mb-1 ml-1 uppercase tracking-wider">Track</label>
                <select
                  id="track-filter"
                  value={selectedTrack}
                  onChange={(e) => updateFilters('track', e.target.value)}
                  className="block w-full pl-3 pr-10 py-2.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-primary-500 focus:border-primary-500 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white appearance-none cursor-pointer"
                >
                  {tracks.map((track) => (
                    <option key={track} value={track}>{track}</option>
                  ))}
                </select>
                <Tag className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 text-slate-400" />
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Showing {filteredSessions.length} sessions
            </p>
            { (searchQuery || selectedDay !== 'All' || selectedCategory !== 'All' || selectedSpeaker !== 'All' || selectedLevel !== 'All' || selectedTrack !== 'All') && (
              <button
                onClick={() => setSearchParams({})}
                className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredSessions.length > 0 ? (
              filteredSessions.map((session) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  key={session.id}
                  className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:shadow-md transition-all flex flex-col"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                        ${session.category === 'Keynote' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' :
                          session.category === 'Breakout' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                          session.category === 'Learning Lab' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                          'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                        }`}>
                        {session.category}
                      </span>
                      {session.details?.level && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300">
                          {session.details.level}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400 font-medium whitespace-nowrap">
                      {session.day}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {session.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-2 flex-grow">
                    {session.description}
                  </p>

                  <div className="space-y-3 pt-6 border-t border-slate-100 dark:border-slate-800">        
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">        
                      <User className="h-4 w-4 mr-2 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{session.speaker}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">        
                      <Clock className="h-4 w-4 mr-2 text-slate-400 flex-shrink-0" />
                      <span>{session.time}</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600 dark:text-slate-400">        
                      <MapPin className="h-4 w-4 mr-2 text-slate-400 flex-shrink-0" />
                      <span className="truncate">{session.location}</span>
                    </div>
                  </div>

                  <Link
                    to={`/catalog/${session.id}`}
                    className="mt-6 inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                  >
                    View Details <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center py-20"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-slate-100 dark:bg-slate-800 mb-6">
                  <Search className="h-10 w-10 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No sessions found</h3>
                <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto">
                  We couldn't find any sessions matching your current filters. Try adjusting your search or clearing the filters.
                </p>
                <button
                  onClick={() => setSearchParams({})}
                  className="mt-8 px-6 py-2 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors"
                >
                  Clear all filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
