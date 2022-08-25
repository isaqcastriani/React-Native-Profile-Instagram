// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, Image, Pressable } from 'react-native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_100Thin,
  Jost_200ExtraLight,
  Jost_300Light,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
  Jost_800ExtraBold,
  Jost_900Black,
  Jost_100Thin_Italic,
  Jost_200ExtraLight_Italic,
  Jost_300Light_Italic,
  Jost_400Regular_Italic,
  Jost_500Medium_Italic,
  Jost_600SemiBold_Italic,
  Jost_700Bold_Italic,
  Jost_800ExtraBold_Italic,
  Jost_900Black_Italic,
} from '@expo-google-fonts/jost';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



function Feed() {
  return (

    
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
      <Text>Welcome to Google</Text>
       <Text>That's my WebPage</Text>
    </View>
  );
}

function Profile(  onPress, title = 'Save' ) {
  return (

    
    
    <View style={styles.container}>
      <View style={styles.card}>
       <View style={styles.cabecalho}>
        <Image source={{uri: 'https://br.web.img3.acsta.net/r_1280_720/newsv7/20/05/07/23/47/2428122.jpg'}} style={styles.img} />
        

        <View style={styles.card3}>
           <Text style={styles.float2}> 483 </Text> 
            <View style={styles.separar}>
             <Text style={styles.float2}> Publicações </Text>
            </View>
        </View>

          <View style={styles.card3}>
                <Text style={styles.float1}> 1.2M </Text> 
             <View style={styles.separar}>
                 <Text style={styles.float3}> Seguidores </Text>
          </View>
            </View>

          <View style={styles.card3}>
                <Text style={styles.float3}> 1 </Text> 
              <View style={styles.separar}>
                 <Text style={styles.float1}> Seguindo </Text>
              </View>
          </View>

           
          </View>
        </View>
        <View style={styles.verified}>
        <Text style={styles.txt1}> Sigma Shelby </Text> <MaterialIcons name="verified" size={12.5} color="white" />
         </View>
         <Text style={styles.txt2}> Software Engineer </Text>
        <Text style={styles.txt3}> Pai é sigma, Grind Set </Text>
        <Text style={styles.txt1}> Ver tradução </Text>
             
              
          
      
        

  
const { onPress, title = 'Edit profile' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textbutton}>{title}</Text>
    </Pressable>
    <View style={styles.conection}>
   
    
      <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.textbutton}>Tools</Text>
    </Pressable>
    
      <Pressable style={styles.button2} onPress={onPress}>
      <Text style={styles.textbutton}>Insights</Text>
    </Pressable>

      <Pressable style={styles.button2} onPress={onPress}>
      <Text style={styles.textbutton}>Add shop</Text>
    </Pressable>
     </View>
   
     

      <View style={{flex: 1, flexDirection: 'row'}}>
          <Image source={{uri: 'https://img.estadao.com.br/thumbs/640/resources/jpg/0/4/1645901535240.jpg'}} style={{width: 60, height: 60, backgroundColor: 'powderblue', marginLeft:"15px", marginRight:"4px", marginTop:"15px", borderRadius:"50px", borderWidth: "3px", borderColor:"yellow"}} /> 

          <Image source={{uri: 'https://cdn.domestika.org/c_fill,dpr_1.0,f_auto,h_1200,pg_1,t_base_params,w_1200/v1602843967/project-covers/000/909/426/909426-original.jpg?1602843967'}} style={{width: 60, height: 60, backgroundColor: 'powderblue', marginLeft:"15px", marginRight:"4px", marginTop:"15px", borderRadius:"50px", borderWidth: "3px", borderColor:"yellow",}} />

          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/25/25340.png'}} style={{width: 60, height: 60, backgroundColor: 'white', marginLeft:"15px", marginRight:"4px", marginTop:"15px", borderRadius:"50px", }} />
          
         
          </View>

          <View style={styles.destaqueview}>
          <Text style={styles.destaque}> 1929 </Text>
          <Text style={styles.destaque1}> Trips </Text>
          <Text style={styles.destaque1}> New </Text>
          </View>

          


        <View style={{flex: 1, flexDirection: 'row'}}>
           <Image source={{uri: 'https://rollingstone.uol.com.br/media/uploads/cillian_murphy_como_tommy_shelby_reproducao_netflix.jpg'}} style={{width: 90, height: 90, backgroundColor: 'powderblue', marginLeft:"15px", marginRight:"4px", borderRadius: "7px",}} />

           <Image source={{uri: 'https://i.pinimg.com/originals/b8/10/e3/b810e3b20a5167598122f76fc171c574.jpg'}} style={{width: 90, height: 90, backgroundColor: 'powderblue', marginLeft:"15px", marginRight:"4px", borderRadius: "7px",}} />

           <Image source={{uri: 'https://www.hallofseries.com/wp-content/uploads/2018/12/Immagine-56.png'}} style={{width: 90, height: 90, backgroundColor: 'powderblue', marginLeft:"15px", marginRight:"4px", borderRadius: "7px",}} />
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
             <Image source={{uri: 'https://i.pinimg.com/736x/ab/59/10/ab5910eb92f99c37e25bbbf91226aa44.jpg'}} style={{width: 90, height: 90, backgroundColor: 'powderblue', marginLeft:"15px", marginRight:"4px", marginTop:"-80px", borderRadius: "7px",}} />

             <Image source={{uri: 'https://www.hallofseries.com/wp-content/uploads/2018/06/thomas-shelby-790x1024.png'}} style={{width: 90, height: 90, backgroundColor: 'powderblue', marginLeft:"15px", marginRight:"4px", marginTop:"-80px", borderRadius: "7px",}} />

             <Image source={{uri: 'https://mancode.id/media/images/Thomas-Shelby-6.2e16d0ba.fill-1200x800_PsFgwg0.jpg'}} style={{width: 90, height: 90, backgroundColor: 'powderblue', marginLeft:"15px", marginRight:"4px", marginTop:"-80px", borderRadius: "7px",}} />

            </View>
        
      


    
    </View>
    

  
  
  );
}

function Notifications() {
  return (
    <View style={styles.text1}> 
      <Text>Welcome to Steam</Text>
       <Text>That's my WebPage</Text>
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    
    
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Feed') {
              iconName = focused
                ? 'md-home-outline' : 'md-home-outline';
            } 
              if (route.name === 'Notifications') {
              iconName = focused ? 'notifications-outline' : 'notifications-outline';
            }
             else if (route.name === 'Profile') {
              iconName = focused ? 'person-outline' : 'person-outline';
            }
              let [fontsLoaded] = useFonts({
    Jost_100Thin,
    Jost_200ExtraLight,
    Jost_300Light,
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Jost_800ExtraBold,
    Jost_900Black,
    Jost_100Thin_Italic,
    Jost_200ExtraLight_Italic,
    Jost_300Light_Italic,
    Jost_400Regular_Italic,
    Jost_500Medium_Italic,
    Jost_600SemiBold_Italic,
    Jost_700Bold_Italic,
    Jost_800ExtraBold_Italic,
    Jost_900Black_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }
  

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'lightgray',
        })}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Notifications" component={Notifications} />
         <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
   
  },

 txt1:{
    color: "white", 
    fontFamily: "Jost_400Regular",
    fontWeight: "bold",
    letterSpacing: ".1rem",
    marginBottom: "3px",
    fontSize: "12.5px",
    },

   txt2:{
    color: "#909090", 
    fontFamily: "Jost_300Light",
    fontWeight: "bold",
    letterSpacing: ".1rem",
    fontSize: "13px",
    },  

    txt3:{
     color: "white", 
    fontFamily: "Jost_300Light",
    fontWeight: "bold",
    letterSpacing: ".1rem",
    marginBottom: "3px",
    fontSize: "13px",
    },  

    float1:{
    alignContent: "right",
    color: "white", 
    fontFamily: "Jost_300Light",
    fontWeight: "bold",
    fontSize: "12.5px",
    letterSpacing: ".1rem",
    marginBottom: "3px",
    
    },  

     float2:{
    alignContent: "right",
    color: "white", 
    fontFamily: "Jost_300Light",
    fontWeight: "bold",
    fontSize: "12.5px",
    letterSpacing: ".1rem",
    marginBottom: "3px",
    
    },  

     float3:{
    alignContent: "right",
    color: "white", 
    fontFamily: "Jost_300Light",
    fontWeight: "bold",
    fontSize: "12.5px",
    letterSpacing: ".1rem",
    marginBottom: "3px",
    
    },  

  img:{
    width: "70px",
    height: "70px",
    borderRadius: "50px",
    marginBottom: "4px",
  },
  
  card:{
    backgroundColor: "black",
    paddingLeft: "10px",
    paddingTop: "5px",
  },



  card3:{ 
    backgroundColor: "black",
    paddingTop: "15px",
    alignItems: "center",
  },

   cabecalho:{
    flexDirection: "row",
    backgroundColor: "black",
    paddingTop: "5px",
    width: "100%",
  },
 
   separar:{
     marginTop: "-5px",
   },

    verified:{
      flexDirection: "row",
      alignContent: "center",
    },

      button:{
    width:"92%",
    marginLeft: "15px",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#606060',
    marginTop:"-13px",
   },

   conection:{
     flexDirection:"row",
     width:"33%",
    height:"30px",
    marginTop:"20px",
   },

     button2:{
    width:"90%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#606060',
    marginTop:"-13px",
    marginLeft:"5px",
   },

     textbutton: {
    fontFamily: "Jost_500Medium",
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 1,
    color: 'white',
  },

   destaqueview: {
    marginTop: "-110px",
    paddingLeft: "23px",
    paddingBottom: "10px",
    flexDirection:"row",
  },
   destaque: {
    fontFamily: "Jost_300Light",
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 1,
    color: 'white',
    flexDirection:"row",
    marginTop:"10px",
  },

  destaque1: {
    
    marginLeft:"43.5px",
    fontFamily: "Jost_300Light",
    fontSize: 12,
    lineHeight: 21,
    letterSpacing: 1,
    color: 'white',
    flexDirection:"row",
    marginTop:"10px",
  },
});








