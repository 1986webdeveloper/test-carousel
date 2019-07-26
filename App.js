import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import RelatedCourses from './app/RelatedCourses';


export default class App extends Component {
  
  constructor (props) {
      super(props);
      this.state = {
        items: [
          {
            title: 'Kriminologi - kriminalvård och psykisk ohälsa',
            courseCode: 'KKP100',
            universityName: 'Lunds Universitet'
          },
          {
            title: 'Socionomutbildning',
            courseCode: 'SOCA83',
            universityName: 'Lunds Universitet'
          },
          {
            title: 'Mäns våld mot kvinnor, grundkurs',
            courseCode: 'MVMK100',
            universityName: 'Lunds Universitet'
          },
          {
            title: 'Genuspedagogik i lärmiljöer',
            courseCode: 'GUSP230',
            universityName: 'Lunds Universitet'
          },
          {
            title: 'grundkurs - Mäns våld',
            courseCode: 'ABC123',
            universityName: 'Lunds Universitet'
          }]
      };
  }

  render() {
    return (
      <View style={styles.container}>
        
      <View style={styles.carousel}>
          <RelatedCourses
                style={{ flex: 1 }}
                currentSelectIndex={0}
                data={this.state.items}
            />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEEEEE',
  },
  carousel:{
    marginTop:100,
  }
});
