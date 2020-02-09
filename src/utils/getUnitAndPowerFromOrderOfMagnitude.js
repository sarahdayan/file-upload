import getBaseLog from "@/utils/getBaseLog";
import getClosest from "@/utils/getClosest";

const units = {
  1: "B",
  3: "KB",
  6: "MB",
  9: "GB",
  12: "TB"
};

export default function getUnitAndPowerFromOrderOfMagnitude(order) {
  const baseLog = Math.ceil(getBaseLog(10, order));
  const power = getClosest(baseLog, Object.keys(units).map(Number));
  const unit = units[power];

  return {
    unit,
    power
  };
}
