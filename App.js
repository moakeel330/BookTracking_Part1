import {useState} from 'react';
import {
	View,
	Text,
	TouchableHighlight,
	StyleSheet,
	Image
} from 'react-native';

function App(){

const [title, setTitle] = useState('The Lord of the Rings');
const [author, setAuthor] = useState('JR Tolkien');
const [numPages, setNumPages] = useState('1024');
const [genre, setGenre] = useState('Fantasy');

const [totalPages, setTotalPages] = useState(2048);
const [averagePages, setAveragePages] = useState(205);

	return(
		<View style={styles.container}>

			<View>
				{/* image + app name here*/}
        <Text style={styles.appName}>Bookworm</Text>
			</View>

			<View>
				{/* details of the last book read here*/}
        <Text style={styles.lbr}>LAST BOOK READ</Text>
        <Text>{title}</Text>
        <Text>{author}</Text>
        <Text>{numPages}</Text>
        <Text>{genre}</Text>
			</View>

			<View style={styles.totavgBlock}>
				{/* blocks for total and average here */}

        <View style={styles.taBlock}>
          <Text style={styles.lbr}>TOTAL{'\n'}PAGES</Text>
            <Text>{totalPages}</Text>
        </View>

        <View style={styles.taBlock}>
          <Text style={styles.lbr}>AVERAGE{'\n'}PAGES</Text>
            <Text>{averagePages}</Text>
        </View>
			</View>

			<View style={styles.menu}>
				{/* menu buttons here */}
				<TouchableHighlight>
					<View style={styles.menuButton}>
						<Text>Enter Book</Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight>
					<View style={styles.menuButton}>
						<Text>History</Text>
					</View>
				</TouchableHighlight>

				<TouchableHighlight>
					<View style={styles.menuButton}>
						<Text>Genre</Text>
					</View>
				</TouchableHighlight>

			</View>
		</View>
  );
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 15,
	},
	menuButton:{
		width: 100,
		height: 75,
		padding: 2,
    margin: 10,
  },
  menu:{
    flexDirection: 'row',
  },
  appName:{
    fontSize: 35,
    fontWeight: 'bold'
  },
  lbr:{
    fontSize: 28,
    fontWeight: 'bold',
  },
  totavgBlock:{
    flexDirection: 'row',
  },
  taBlock:{
    margin: 5,
    padding: 5,
    height: 300,
  }
});
export default App;