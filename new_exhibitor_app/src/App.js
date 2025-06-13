import './App.css';
import React, { useState } from 'react';
import { User, Lock, ArrowRight, Calendar, BarChart3, CheckCircle2, Clock, AlertCircle, Package, Truck, ClipboardCheck } from 'lucide-react';

function App() {
  const [selectedExecutive, setSelectedExecutive] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedShow, setSelectedShow] = useState(null);
  const [activeTab, setActiveTab] = useState('booth-checks');

  const executives = [
    {
      id: 'sarah-chen',
      name: 'Sarah Chen',
      title: 'VP of Operations',
      avatar: '👩‍💼',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 'marcus-rodriguez',
      name: 'Marcus Rodriguez',
      title: 'Director of Events',
      avatar: '👨‍💼',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 'elena-kim',
      name: 'Elena Kim',
      title: 'Head of Logistics',
      avatar: '👩‍💻',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'david-thompson',
      name: 'David Thompson',
      title: 'VP of Marketing',
      avatar: '👨‍🎯',
      color: 'from-orange-600 to-red-600'
    },
    {
      id: 'aisha-patel',
      name: 'Aisha Patel',
      title: 'Operations Manager',
      avatar: '👩‍⚖️',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      id: 'james-wright',
      name: 'James Wright',
      title: 'Executive Producer',
      avatar: '👨‍🎭',
      color: 'from-amber-600 to-orange-600'
    }
  ];

  const shows = [
    {
      id: 'coffee-fest',
      name: 'Coffee Fest 2025',
      date: 'June 15-17, 2025',
      location: 'Seattle Convention Center',
      progress: { received: 100, inProgress: 75, completed: 30 },
      status: 'in-progress',
      totalBooths: 245,
      checkedBooths: 180,
      orders: 156,
      color: 'from-amber-600 to-orange-600',
      icon: '☕'
    },
    {
      id: 'tech-summit',
      name: 'Tech Summit West',
      date: 'July 8-10, 2025',
      location: 'San Francisco Expo',
      progress: { received: 100, inProgress: 90, completed: 85 },
      status: 'near-completion',
      totalBooths: 180,
      checkedBooths: 175,
      orders: 203,
      color: 'from-blue-600 to-purple-600',
      icon: '💻'
    },
    {
      id: 'health-expo',
      name: 'Health & Wellness Expo',
      date: 'August 22-24, 2025',
      location: 'Los Angeles Center',
      progress: { received: 85, inProgress: 45, completed: 0 },
      status: 'early-stage',
      totalBooths: 320,
      checkedBooths: 95,
      orders: 67,
      color: 'from-green-600 to-emerald-600',
      icon: '🏥'
    },
    {
      id: 'food-festival',
      name: 'International Food Festival',
      date: 'September 5-7, 2025',
      location: 'Chicago McCormick Place',
      progress: { received: 60, inProgress: 20, completed: 0 },
      status: 'planning',
      totalBooths: 410,
      checkedBooths: 45,
      orders: 89,
      color: 'from-red-600 to-pink-600',
      icon: '🍕'
    },
    {
      id: 'auto-show',
      name: 'Auto Innovation Show',
      date: 'October 12-14, 2025',
      location: 'Detroit Auto Center',
      progress: { received: 40, inProgress: 0, completed: 0 },
      status: 'initial',
      totalBooths: 150,
      checkedBooths: 12,
      orders: 23,
      color: 'from-gray-600 to-slate-600',
      icon: '🚗'
    },
    {
      id: 'fashion-week',
      name: 'Fashion Week Preview',
      date: 'November 18-20, 2025',
      location: 'New York Fashion Center',
      progress: { received: 25, inProgress: 0, completed: 0 },
      status: 'concept',
      totalBooths: 95,
      checkedBooths: 8,
      orders: 12,
      color: 'from-purple-600 to-indigo-600',
      icon: '👗'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'near-completion': return 'text-blue-400';
      case 'in-progress': return 'text-yellow-400';
      case 'early-stage': return 'text-orange-400';
      case 'planning': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed': return <CheckCircle2 className="w-5 h-5" />;
      case 'near-completion': return <BarChart3 className="w-5 h-5" />;
      case 'in-progress': return <Clock className="w-5 h-5" />;
      default: return <AlertCircle className="w-5 h-5" />;
    }
  };

  const handleLogin = () => {
    if (selectedExecutive) {
      setIsLoggedIn(true);
    }
  };

  const handleShowSelect = (show) => {
    setSelectedShow(show);
    setActiveTab('booth-checks');
  };

  const renderProgressBar = (progress) => (
    <div className="space-y-3">
      {/* Received */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-300">Received</span>
        <span className="text-white font-medium">{progress.received}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${progress.received}%` }}
        ></div>
      </div>

      {/* In Progress */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-300">In Progress</span>
        <span className="text-white font-medium">{progress.inProgress}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${progress.inProgress}%` }}
        ></div>
      </div>

      {/* Completed */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-gray-300">Completed</span>
        <span className="text-white font-medium">{progress.completed}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2">
        <div 
          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${progress.completed}%` }}
        ></div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'booth-checks':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((booth) => (
                <div key={booth} className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                  <div className="aspect-video bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-4xl">🏪</span>
                  </div>
                  <h4 className="text-white font-medium mb-1">Booth #{booth}01</h4>
                  <p className="text-gray-300 text-sm mb-2">Section A-{booth}</p>
                  <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs ${
                    booth % 3 === 0 ? 'bg-green-500/20 text-green-400' : 
                    booth % 2 === 0 ? 'bg-yellow-500/20 text-yellow-400' : 
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {booth % 3 === 0 ? <CheckCircle2 className="w-3 h-3" /> : 
                     booth % 2 === 0 ? <Clock className="w-3 h-3" /> : 
                     <AlertCircle className="w-3 h-3" />}
                    <span>{booth % 3 === 0 ? 'Checked' : booth % 2 === 0 ? 'Pending' : 'Issue'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      case 'orders':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Recent Orders</h3>
                <div className="space-y-3">
                  {[1, 2, 3, 4].map((order) => (
                    <div key={order} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div>
                        <p className="text-white font-medium">Order #{order}2025</p>
                        <p className="text-gray-300 text-sm">Booth Setup Package</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-medium">${(Math.random() * 5000 + 1000).toFixed(0)}</p>
                        <p className="text-gray-300 text-sm">Confirmed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Order Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Total Orders</span>
                    <span className="text-white font-medium">{selectedShow?.orders}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Pending</span>
                    <span className="text-yellow-400 font-medium">{Math.floor(selectedShow?.orders * 0.3)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Confirmed</span>
                    <span className="text-green-400 font-medium">{Math.floor(selectedShow?.orders * 0.7)}</span>
                  </div>
                  <div className="flex justify-between border-t border-white/20 pt-4">
                    <span className="text-white font-medium">Total Value</span>
                    <span className="text-white font-bold">${(selectedShow?.orders * 2850).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'marshaling':
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Truck className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-semibold text-white">Incoming</h3>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">24</div>
                <p className="text-gray-300">Shipments expected</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <Package className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Processing</h3>
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">12</div>
                <p className="text-gray-300">Being sorted</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                  <h3 className="text-xl font-semibold text-white">Deployed</h3>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">156</div>
                <p className="text-gray-300">Items placed</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 flex items-center justify-center p-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-2 border border-white/20 shadow-2xl">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <User className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Show Management</h1>
              <p className="text-gray-300">Executive Dashboard Access</p>
            </div>

            <div className="space-y-3 mb-8">
              <label className="block text-sm font-medium text-gray-200 mb-3">
                Select Executive Profile
              </label>
              {executives.map((executive) => (
                <div
                  key={executive.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedExecutive === executive.id ? 'transform scale-105' : 'hover:scale-102'
                  }`}
                  onClick={() => setSelectedExecutive(executive.id)}
                >
                  <div className={`
                    p-4 rounded-2xl border-2 transition-all duration-300
                    ${selectedExecutive === executive.id
                      ? 'border-white/50 bg-white/20 shadow-lg'
                      : 'border-white/20 bg-white/5 hover:bg-white/10'
                    }
                  `}>
                    <div className="flex items-center space-x-4">
                      <div className={`
                        w-12 h-12 rounded-xl bg-gradient-to-r ${executive.color} 
                        flex items-center justify-center text-2xl shadow-lg
                      `}>
                        {executive.avatar}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white">{executive.name}</h3>
                        <p className="text-sm text-gray-300">{executive.title}</p>
                      </div>
                      {selectedExecutive === executive.id && (
                        <div className="text-white">
                          <ArrowRight className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={handleLogin}
              disabled={!selectedExecutive}
              className={`
                w-full py-4 rounded-2xl font-semibold text-white transition-all duration-300
                ${selectedExecutive
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:scale-105 active:scale-95'
                  : 'bg-gray-600/50 cursor-not-allowed'
                }
              `}
            >
              <div className="flex items-center justify-center space-x-2">
                <Lock className="w-5 h-5" />
                <span>Access Dashboard</span>
              </div>
            </button>

            <div className="text-center mt-6">
              <p className="text-xs text-gray-400">
                Secure Executive Portal • Live Data Integration
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Show Selection Screen
  if (!selectedShow) {
    const executive = executives.find(e => e.id === selectedExecutive);
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">Welcome back, {executive?.name}</h1>
                <p className="text-gray-300 text-lg">{executive?.title}</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-6xl">{executive?.avatar}</div>
                <button 
                  onClick={() => setIsLoggedIn(false)}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl transition-all duration-300 border border-white/20"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>

          {/* Shows Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shows.map((show) => (
              <div
                key={show.id}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 cursor-pointer transform hover:scale-105"
                onClick={() => handleShowSelect(show)}
              >
                {/* Show Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${show.color} flex items-center justify-center text-3xl shadow-lg`}>
                    {show.icon}
                  </div>
                  <div className={`flex items-center space-x-1 ${getStatusColor(show.status)}`}>
                    {getStatusIcon(show.status)}
                    <span className="text-sm font-medium capitalize">{show.status.replace('-', ' ')}</span>
                  </div>
                </div>

                {/* Show Info */}
                <h3 className="text-xl font-bold text-white mb-2">{show.name}</h3>
                <div className="flex items-center text-gray-300 text-sm mb-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  {show.date}
                </div>
                <p className="text-gray-300 text-sm mb-6">{show.location}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{show.checkedBooths}/{show.totalBooths}</div>
                    <div className="text-xs text-gray-300">Booths Checked</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{show.orders}</div>
                    <div className="text-xs text-gray-300">Orders</div>
                  </div>
                </div>

                {/* Progress */}
                {renderProgressBar(show.progress)}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Show Dashboard
  const executive = executives.find(e => e.id === selectedExecutive);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 mb-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setSelectedShow(null)}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all duration-300"
              >
                <ArrowRight className="w-5 h-5 text-white transform rotate-180" />
              </button>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${selectedShow.color} flex items-center justify-center text-3xl`}>
                {selectedShow.icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{selectedShow.name}</h1>
                <p className="text-gray-300">{selectedShow.date} • {selectedShow.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-white font-medium">{executive?.name}</p>
                <p className="text-gray-300 text-sm">{executive?.title}</p>
              </div>
              <div className="text-4xl">{executive?.avatar}</div>
            </div>
          </div>
        </div>

        {/* Progress Overview */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Project Progress</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              {renderProgressBar(selectedShow.progress)}
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">{selectedShow.checkedBooths}</div>
                <div className="text-sm text-gray-300">Booths Checked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{selectedShow.orders}</div>
                <div className="text-sm text-gray-300">Orders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{selectedShow.totalBooths}</div>
                <div className="text-sm text-gray-300">Total Booths</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 overflow-hidden">
          <div className="flex border-b border-white/20">
            {[
              { id: 'booth-checks', label: 'Booth Checks', icon: ClipboardCheck },
              { id: 'orders', label: 'Orders', icon: Package },
              { id: 'marshaling', label: 'Marshaling Yard', icon: Truck }
            ].map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center space-x-2 py-6 px-6 transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-white/20 text-white'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
          
          <div className="p-8">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
