import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import{getSelectedCategory}from '../store/Categories';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function Categories(props) {
    const categories = props.creducers.categories;
    const [value, setValue] = useState(0);
    const getActiveCategory = props.getSelectedCategory;
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        getActiveCategory(value+1);
    },[value,getActiveCategory]);
    return (
        <div>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Sports" />
                    <Tab label="Entertainment" />
                    <Tab label="Technology" />
                    <Tab label="Food" />
                    <Tab label="Fashion" />
                    <Tab label="sony store" />

                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <h1> {categories[0].name}</h1>
                <p>
                    {categories[0].description}
                </p>
                

            </TabPanel>
            <TabPanel value={value} index={1}>
                <h1> {categories[1].name}</h1>

                <p>
                    {categories[1].description}
                </p>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <h1> {categories[2].name}</h1>
                <p>
                    {categories[2].description}
                </p>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <h1> {categories[3].name}</h1>
                <p>
                    {categories[3].description}
                </p>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <h1> {categories[4].name}</h1>

                <p>
                    {categories[4].description}
                </p>

            </TabPanel>
            <TabPanel value={value} index={5}>
                <h1> {categories[5].name}</h1>

                <p>
                    {categories[5].description}
                </p>
            </TabPanel>

        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        creducers: state.creducers
    }
}
const mapDispatchToProps ={
    getSelectedCategory

}
export default connect(mapStateToProps,mapDispatchToProps)(Categories);