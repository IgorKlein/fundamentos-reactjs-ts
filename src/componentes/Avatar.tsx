import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

// Implementação de interface que extende propriedades de componente React com Generics (<xx>) de biblioteca global.
// Implementando esta interface, não precisamos mais declarar entradas típicas de uma img,
//como "src", "alt", ou "title". 
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

// Desta forma, carregamos apenas as propriedades declaradas neste componente.
// export function Avatar({ hasBorder = true, src, alt , title}: AvatarProps) {

// Desta forma, usamos o "rest operator", que nos trás como props todos os demais
export function Avatar({ hasBorder = true, ...props }: AvatarProps) {

    console.log(props)

    return(
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            // src={src}
            // alt={alt}
            // title={title}

            // Usamos aqui o "spread operator" para disponibilizar todas as propriedades
            //de img ao nosso componente Avatar.
            {...props}
        />                  
    )
}