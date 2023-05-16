import { View } from "react-native";

import { styles } from "./style";

type Props = {
  active?: boolean;
};

export default function TimeLine({ active }: Props) {
  return (
    <>
      <View style={styles.container}>
        {/* Circle */}
        <View style={styles.circle}>
          {active && <View style={styles.active}></View>}
        </View>
        {/* Row */}
        <View style={styles.row}></View>
      </View>
    </>
  );
}
