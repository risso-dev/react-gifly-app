import { useState } from 'react'
import { AddCategory,GifGrid } from './components';

export const GiflyApp = () => {
    
    const [ categories, setCategories ] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        const dupliCategory = categories.find(category => category === newCategory);
        if(dupliCategory) return;       
        setCategories([ newCategory , ...categories ]);
    }

    return (
        <>
            <h1>Gifly App</h1>

            < AddCategory 
                onNewCategory={ value => onAddCategory(value) }
            />


            { 
                categories.map( category => (
                    <GifGrid 
                        key={category} 
                        category={ category } /> 
                )) 
            }

        </>
    )
}
