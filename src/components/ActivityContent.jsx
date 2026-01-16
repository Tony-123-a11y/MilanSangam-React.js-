import { Calendar, Heart, MessageSquare, Eye, User, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ActivityContent = () => {
  const activities = [
    {
      id: 1,
      type: "view",
      user: "David Wilson",
      time: "2 hours ago",
      icon: Eye,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      type: "like",
      user: "Jessica Parker",
      time: "Yesterday",
      icon: Heart,
      color: "bg-rose-100 text-rose-600",
    },
    {
      id: 3,
      type: "message",
      user: "Michael Chen",
      time: "Yesterday",
      message:
        "Hi there! I noticed we have a lot in common. Would you like to chat?",
      icon: MessageSquare,
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      type: "match",
      user: "Priya Sharma",
      time: "2 days ago",
      icon: User,
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 5,
      type: "event",
      title: "Virtual Speed Dating",
      time: "Upcoming - May 15, 2024",
      icon: Calendar,
      color: "bg-amber-100 text-amber-600",
    },
  ];

  return (
    <div className="space-y-6 bg-white  px-6 max-sm:px-3 py-4  shadow-sm max-lg:w-full ">
       <div className="flex items-center gap-2">
          <Link to={'/profile'} className="p-2 rounded-full hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Recent Activity</h1>
        </div>

      <div className="bg-white rounded-lg  border border-gray-200">
        <div className="divide-y divide-gray-200">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="p-4 hover:bg-gray-50 transition-colors" >
              <div className="flex items-start gap-4">
                <div className={`p-2 rounded-full ${activity.color}`}>
                  <activity.icon size={20} />
                </div>

                <div className="flex-1">
                  {activity.type === "event" ? (
                    <div>
                      <h3 className="font-medium">{activity.title}</h3>
                      <p className="text-sm text-gray-600">{activity.time}</p>
                      <div className="mt-2">
                        <button className="text-sm font-medium text-rose-600 hover:text-rose-700">
                          RSVP Now
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-medium">
                        {activity.user}
                        {activity.type === "view" && " viewed your profile"}
                        {activity.type === "like" && " liked your profile"}
                        {activity.type === "message" && " sent you a message"}
                        {activity.type === "match" && " matched with you"}
                      </h3>
                      <p className="text-sm text-gray-500">{activity.time}</p>

                      {activity.message && (
                        <div className="mt-2 p-3 bg-gray-50 rounded-lg text-sm">
                          {activity.message}
                        </div>
                      )}

                      <div className="mt-2 flex gap-2">
                        {(activity.type === "like" ||
                          activity.type === "match") && (
                          <button className="text-sm font-medium text-rose-600 hover:text-rose-700">
                            View Profile
                          </button>
                        )}

                        {activity.type === "message" && (
                          <button className="text-sm font-medium text-rose-600 hover:text-rose-700">
                            Reply
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityContent;
