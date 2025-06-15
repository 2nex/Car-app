import { View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import Octicons from 'react-native-vector-icons/Octicons';
import { scale } from '../../theme/scale';
import { createStyles } from './header.styles ';
import assets from '../../assets';
import { colors } from '../../theme/colors';
import { IHeaderProps } from './IHeader.props';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { goBack } from '../../navigators/navigation-utilities';


 


const HeaderComponent =({title, hasBack = false }: IHeaderProps) => {
    const styles = createStyles();
     const {logo_black, person} = assets;
    return(<View style={styles.header}>
                <View style={styles.flexRow}>
                 {hasBack ? (
                  <Pressable  onPress={goBack} style={styles.borderRound}>
                   <MaterialIcons 
                  name='chevron-left'
                  size={scale(20)}
                  color={colors.black}
                  />
                 </Pressable>
                 ):(
                  <>
                   <Image  source={logo_black}  style={styles.carLogo}/>
            <Text style={styles.titleStyle}>{title}</Text > 
                  </>
                 )}
           
          </View>

          {
            hasBack && <Text style={[styles.titleStyle, styles.t20]}>{title}</Text >
          }
          
          <View  style={styles.flexRow}>

            {hasBack ? (

              
            <Pressable  style={styles.borderRound}>
              <MaterialCommunityIcons 
              name="dots-horizontal"
              size={scale(26)}
              color={colors.black}
            />
            </Pressable>


            ):(
              <>
               <Pressable  style={styles.borderRound}>
                 <Octicons  name="bell" size={scale(20)}  color={colors.gray}/>
            </Pressable>
            <Pressable  >
                 <Image   source={person}   style={styles.person}/> 
                 
            </Pressable>
              </>

            )}
          
          </View>
        </View>
    );
};

export default HeaderComponent;
