import React from 'react';
import { ImageBackground, SafeAreaView, View, StyleSheet, Dimensions, StatusBar } from 'react-native';

//import Slider from '@react-native-community/slider';
//import Ionicons from 'react-native-vector-icons/Ionicons';
import MediaComponent from './src/components/media.player.component';
import DefaultTheme from './theme.default';

const { width, height } = Dimensions.get('window');

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={DefaultTheme.backgroundImageInverse}
        resizeMode='stretch'
        style={DefaultTheme.dashboard.cssBackgroundImage}>
        <SafeAreaView style={styles.mainContainer}>

        <MediaComponent />

          {/* <View style={styles.countTrack}>
                    <Text style={styles.totalTrack}>{(trackId + 1).toString() + '/' + playlist.length.toString()}</Text>
                </View>


                <FlatList

                    ref={flatlistRef}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    //initialNumToRender={playlist?.length ? playlist.length : 1}
                    data={playlist}
                    viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
                    onScrollToIndexFailed={scrollToIndexFailed}
                    keyExtractor={item => item.id}
                    //extraData={trackId}
                    initialScrollIndex={trackId}
                    renderItem={({ item }) => {
                        return (<View style={styles.mainWrapper}>
                            <View style={[styles.imageWrapper, styles.elevation]}>
                                <Image
                                    progressiveRenderingEnabled={true}
                                    source={{ uri: item.artwork }}
                                    style={styles.musicImage}
                                />
                                <Audio/>
                            </View>
                            
                        </View>);
                    }}
                />
                <View>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.songContent, styles.songTitle]}>
                        {currentTrack?.title ? currentTrack.title : 'Unknown title'}
                    </Text>
                    <Text numberOfLines={1} ellipsizeMode='tail' style={[styles.songContent, styles.songArtist]}>
                        {currentTrack?.artist ? currentTrack.artist : ' '}
                    </Text>
                </View>

                <View style={styles.sliderContainer}>
                    <Slider
                        style={styles.progressBar}
                        value={parseInt(positionMillis, 10)}
                        minimumValue={0}
                        maximumValue={parseInt(durationMillis, 10)}
                        thumbTintColor="#FFD369"
                        minimumTrackTintColor="#FFD369"
                        maximumTrackTintColor="#fff"
                        onSlidingStart={onAudioSlidingStart}
                        onSlidingComplete={onAudioSlidingComplete}
                    />

                    <View style={styles.progressLevelDuration}>
                        <Text style={styles.progressLabelText}>
                            {msToTime(positionMillis)}
                        </Text>
                        <Text style={styles.progressLabelText}>
                            {msToTime(durationMillis)}
                        </Text>
                    </View>

                    <View style={styles.musicControlsContainer}>
                        <TouchableOpacity onPress={skipToPrevious} disabled={isBusy}>
                            <Ionicons
                                name="play-skip-back-outline"
                                size={50} color="#FFD369" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleAudioStatus} disabled={isBusy}>
                            <Ionicons
                                name={isPlaying ? 'pause-circle' : 'play-circle'}
                                size={75}
                                color="#FFD369"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={skipToNext} disabled={isBusy}>
                            <Ionicons
                                name="play-skip-forward-outline"
                                size={50}
                                color="#FFD369"
                            />
                        </TouchableOpacity>
                    </View>

                </View>




                <View style={styles.bottomSection}>
                    <View style={styles.bottomIconContainer}>
                        <TouchableOpacity onPress={() => { }}>
                            <Ionicons name="heart-outline" size={30} color={styles.iconColor} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { Alert.alert(playlistName + ' ' + track.chapter.toString() + ':', track.title + '\n\n' + track.description) }}>
                            <Ionicons name="information-circle-outline" size={30} color={styles.iconColor} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}>
                            <Ionicons name="cloud-download-outline" size={30} color={styles.iconColor} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { }}>
                            <Ionicons name="share-social-outline" size={30} color={styles.iconColor} />
                        </TouchableOpacity>
                    </View>
                </View> */}

        </SafeAreaView>
      </ImageBackground >
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  mainContainer: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // flex: 1,
    // //alignItems: 'center',
    // //justifyContent: 'center',

  },
  titleFont: {
    fontSize: 30,
    color: '#EEEEEE'
  },
  bottomSection: {
    borderTopColor: '#393E46',
    borderTopWidth: 1,
    width: width,
    alignItems: 'center',
    paddingVertical: 5
  },
  bottomIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  iconColor: '#888888',


  sliderContainer: {
    //flex: 1,
    minHeight: 180,
    paddingHorizontal: 10
  },
  progressBar: {
    maxWidth: width,
    alignItems: 'center',
    height: 'auto',
    marginTop: 40,
    flexDirection: 'row',
  },
  progressLevelDuration: {
    maxWidth: width,
    alignItems: 'center',
    paddingHorizontal: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressLabelText: {
    color: '#FFF',
  },
  musicControlsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    //height: 'auto',
    paddingBottom: 9,
    maxWidth: width,
    alignItems: 'center',
    gap: 40
  },


  songContent: {
    textAlign: 'center',
    color: '#EEEEEE'
  },
  songTitle: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 33,
    minHeight: 30
  },
  songArtist: {
    fontSize: 16,
    fontWeight: '300',
    paddingHorizontal: 33
  },
  countTrack: {
    marginTop: StatusBar.currentHeight + 30,
    marginRight: 60,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  totalTrack: {
    fontSize: 12,
    color: '#EEEEEE'
  },


  mainWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  imageWrapper: {
    width: 300,
    height: 320
  },
  musicImage: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  elevation: {
    elevation: 1,

    shadowColor: '#ccc',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  }
});
