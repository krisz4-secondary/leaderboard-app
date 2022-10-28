import React, { useEffect } from "react";
import { useLeaderboardStore } from "../../../store/LeaderBoardStore";
import { useState } from "react";
import { User } from "../../../types";

export default function useLeadeboardData() {
  const [filteredData, setFilteredData] = useState<User[]>([]);
  const { data, filterText } = useLeaderboardStore();

  useEffect(() => {
    if (filterText && data) {
      const userIndex = data.findIndex((user) => user.name === filterText);
      if (userIndex === -1) {
        alert("User not found");
      }
      if (userIndex > 9) {
        setFilteredData([...data.slice(0, 8), data[userIndex]]);
        return;
      }

      setFilteredData(data.slice(0, 9));
    } else {
      setFilteredData([]);
    }
  }, [filterText]);

  return { filteredData };
}
