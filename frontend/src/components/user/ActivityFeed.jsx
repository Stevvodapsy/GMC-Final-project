import React, { useEffect, useState } from "react";
import { ActivityType } from "../../constants";
import {
  ActivityIcon,
  ReportIcon,
  RewardIcon,
  ScheduleIcon,
} from "../common/Icons";
import {
  fetchUserPickups,
  fetchUserReports,
  fetchUserRewards,
} from "../../services/activityService";

const mockUser = { id: "mockUserId", name: "Mock User" }; // Replace with real user from auth context/state

const ActivityFeed = () => {
  const [pickups, setPickups] = useState([]);
  const [reports, setReports] = useState([]);
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    // TODO: Replace mockUser with real user from auth context/state
    fetchUserPickups(mockUser.id)
      .then(setPickups)
      .catch(() => setPickups([]));
    fetchUserReports(mockUser.name)
      .then(setReports)
      .catch(() => setReports([]));
    fetchUserRewards(mockUser.id)
      .then(setRewards)
      .catch(() => setRewards([]));
  }, []);

  const pickupActivities = pickups.map((p) => ({
    id: p.id,
    type: ActivityType.PICKUP,
    date: p.scheduledDate,
    description: `Pickup ${p.status?.toLowerCase?.()} for ${new Date(
      p.scheduledDate
    ).toLocaleDateString()}`,
  }));
  const reportActivities = reports.map((r) => ({
    id: r.id,
    type: ActivityType.REPORT,
    date: r.createdAt,
    description: `You reported: "${r.type}"`,
  }));
  const rewardActivities = rewards.map((r) => ({
    id: r.id,
    type: ActivityType.REWARD,
    date: r.date,
    description: `Earned points for "${r.action}"`,
    points: r.points,
  }));

  const allActivities = [
    ...pickupActivities,
    ...reportActivities,
    ...rewardActivities,
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Helper to get styles based on activity type
  const getActivityStyles = (type) => {
    switch (type) {
      case ActivityType.PICKUP:
        return {
          Icon: ScheduleIcon,
          bgColor: "bg-blue-100",
          textColor: "text-blue-600",
        };
      case ActivityType.REPORT:
        return {
          Icon: ReportIcon,
          bgColor: "bg-orange-100",
          textColor: "text-orange-600",
        };
      case ActivityType.REWARD:
        return {
          Icon: RewardIcon,
          bgColor: "bg-yellow-100",
          textColor: "text-yellow-600",
        };
      default:
        return {
          Icon: ActivityIcon,
          bgColor: "bg-gray-100",
          textColor: "text-gray-600",
        };
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-surface rounded-xl shadow-lg p-8">
        <div className="flex items-center gap-4 mb-8">
          <div className="bg-gray-100 p-3 rounded-full">
            <ActivityIcon className="h-8 w-8 text-gray-600" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Activity Feed</h2>
            <p className="text-gray-500">
              A timeline of your recent actions and contributions.
            </p>
          </div>
        </div>

        {allActivities.length > 0 ? (
          <div className="relative">
            {/* The timeline vertical bar */}
            <div
              className="absolute left-5 top-0 h-full w-0.5 bg-gray-200"
              aria-hidden="true"
            ></div>

            <ul className="space-y-8">
              {allActivities.map((activity) => {
                const { Icon, bgColor, textColor } = getActivityStyles(
                  activity.type
                );
                return (
                  <li
                    key={activity.id}
                    className="relative flex items-start gap-4"
                  >
                    <div
                      className={`z-10 flex h-10 w-10 items-center justify-center rounded-full ${bgColor}`}
                    >
                      <Icon className={`h-5 w-5 ${textColor}`} />
                    </div>
                    <div className="flex-1 pt-1.5">
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-gray-800">
                          {activity.description}
                        </p>
                        {activity.points && (
                          <p className="font-bold text-lg text-primary">
                            +{activity.points}
                          </p>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-0.5">
                        {new Date(activity.date).toLocaleString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="text-center text-gray-500 py-8">
            <ActivityIcon className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p>You have no recent activity.</p>
            <p className="text-sm mt-1">
              Schedule a pickup or report an issue to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ActivityFeed;
