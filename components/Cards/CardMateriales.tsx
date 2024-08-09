import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '@/constants/styles'


type CardMaterialObject = {
    idMaterial: string
    nombreMaterial: string
    unidadDeMedida: string
    cantidad: string
}

interface MaterialsProps {
    material: CardMaterialObject
}


const Material = ({ material }: MaterialsProps) => {
    return (
        <View style={styles.CardStyle} >
            <Text style={styles.CardStyle}>{material.idMaterial}</Text>
            <Text style={styles.CardStyle}>{material.nombreMaterial}</Text>
            <Text style={styles.CardStyle}>{material.unidadDeMedida}</Text>
            <Text style={styles.CardStyle}>{material.cantidad}</Text>

        </View>
    )
}

export default Material