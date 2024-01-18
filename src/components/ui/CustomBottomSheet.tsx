import React, { forwardRef, useCallback } from "react";
import { View, Text } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  useBottomSheetSpringConfigs,
} from "@gorhom/bottom-sheet";

type Ref = BottomSheetModal;
type Props = {};

export const CustomBottomSheet = forwardRef<Ref, Props>((props, ref) => {
  const snapPoints = React.useMemo(() => ["25%"], []);

  const animationConfigs = useBottomSheetSpringConfigs({
    damping: 80,
    overshootClamping: true,
    restDisplacementThreshold: 0.1,
    restSpeedThreshold: 0.1,
    stiffness: 500,
  });

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        appearsOnIndex={2}
        disappearsOnIndex={-1}
        style={{ zIndex: 10 }}
        {...props}
      />
    ),
    []
  );

  return (
    <View>
      <BottomSheetModal
        ref={ref}
        index={0}
        snapPoints={snapPoints}
        enableContentPanningGesture={false}
        backgroundStyle={{ backgroundColor: "red" }}
        enablePanDownToClose={true}
        animationConfigs={animationConfigs}
        backdropComponent={renderBackdrop}
      >
        <View>
          <Text>Bottom Sheet contenido</Text>
        </View>
      </BottomSheetModal>
    </View>
  );
});
