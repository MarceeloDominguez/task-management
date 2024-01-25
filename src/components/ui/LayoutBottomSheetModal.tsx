import React from "react";
import { Platform } from "react-native";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  BottomSheetScrollView,
  useBottomSheetSpringConfigs,
} from "@gorhom/bottom-sheet";
import { COLORS } from "../../constants/colors";
import { useContextProvider } from "../../context/contextProvider";

type Ref = BottomSheetModal;
type Props = { children: React.ReactNode };

export const LayoutBottomSheetModal = React.forwardRef<Ref, Props>(
  (props, ref) => {
    const snapPoints = React.useMemo(() => ["55%", "65%"], []);
    const { setBottomSheetVisible, handleDismissbottomSheet } =
      useContextProvider();

    const animationConfigs = useBottomSheetSpringConfigs({
      damping: 80,
      overshootClamping: true,
      restDisplacementThreshold: 0.1,
      restSpeedThreshold: 0.1,
      stiffness: 500,
    });

    const renderBackdrop = React.useCallback(
      (props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          appearsOnIndex={2}
          disappearsOnIndex={-1}
          {...props}
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        onDismiss={handleDismissbottomSheet}
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        enableContentPanningGesture={false}
        backgroundStyle={{ backgroundColor: COLORS.PRIMARY[1] }}
        style={{ paddingHorizontal: 16 }}
        enablePanDownToClose={true}
        animationConfigs={animationConfigs}
        backdropComponent={renderBackdrop}
        android_keyboardInputMode="adjustResize"
        keyboardBehavior={Platform.OS === "ios" ? "extend" : "interactive"}
        handleIndicatorStyle={{ backgroundColor: COLORS.SECONDARY[1] }}
      >
        <BottomSheetScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          {props.children}
        </BottomSheetScrollView>
      </BottomSheetModal>
    );
  }
);
