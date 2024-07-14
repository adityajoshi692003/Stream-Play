import React from 'react';
import { Stack } from '@mui/material';
import { categories } from '../utils/constants';
import { Category } from '@mui/icons-material';

const selectedCategory = 'New';

const Sidebar = ({selectedCategory, setSelectedCategory}) => (
    <Stack direction="row" sx={{overflowY:"auto",
        height:{sx:'auto', md:'95%'},   // Making sidebar responsive for all
        flexDirection: {md: 'column'},   // screen sizes
    }}>
    
    {/* Sidebar icons and names*/}

    {categories.map((category) => (
        <button className="category-btn"
        onClick={() => setSelectedCategory(category.name)}
            style={{
                background:Category.name === selectedCategory && '#FC1503',
                color : 'white'
                
            }}
            key ={category.name}
        >
            <span style={{ color: category.name === selectedCategory ? 'white':'purple', marginRight:'15px'}}>{category.icon}</span>
            <span style={{ opacity: category.name === selectedCategory ? '1': '0.9'}}>{category.name}</span>
        </button>
    ))}
    </Stack>
)

export default Sidebar;