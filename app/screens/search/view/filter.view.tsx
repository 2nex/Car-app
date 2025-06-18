import React from 'react'
import { IFilterProps } from '../ISearch.props'
import { createStyles } from '../search.styles';
import { BottomSheet } from '../../../components/bottomSheet/BottomSheet';
import { Pressable, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { scale } from '../../../theme/scale';
import { colors } from '../../../theme/colors';
import { renderBoderBottom, renderMarginBottom } from '../../../utils/ui-utils';
import TabSwitcher from '../../../components/tabSwitcher/component';
import { ITab } from '../../../components/tabSwitcher/ITab.props';




const FilterView = ({visible, setVisible}: IFilterProps)=> {


  const styles = createStyles();

  const data = [
    { 
      id: 1,
      label: 'All Cars',
      value: 'All Cars',
    },

    { 
      id: 2,
      label: 'Regular Cars',
      value: 'Regular Cars',

    },
    {
      id: 3,
      label: 'Luxury Cars',
      value: 'Luxury Cars',
    }
  ]

  return (
    <BottomSheet  visible={visible}  setVisible={setVisible}>

    <View  style={styles.filterView}>
    <View  style={styles.header}>
    <Pressable>
    <MaterialIcons  

    name ='close'
    size={scale(22)}
    color={colors.crossBg}
    />
    </Pressable>
    <Text style={styles.text}>Filters</Text>
    <View style={styles._f08}></View>
    
    
    
    </View>
     <View style={styles.filterContainer}>
    <TabSwitcher 
    title='Types of Cars'
    
    data={data}
     onPress={(e) => console.log(e)} />
     {renderBoderBottom(10)}
    </View>
    </View>
    
    </BottomSheet>
  )
}

export default FilterView;