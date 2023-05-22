import React from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import Category3Container from './Category3Container';
import Category4Container from './Category4Container';
import Category5Container from './Category5Container';
import Category2Container from './Category2Container';

const CategoryTab = () => {
    return (
        <div className='mt-16'>
            <h1 className='text-5xl font-bold text-center mb-12'>Shop by Cubes Category</h1>
            <Tabs className='border-2 bg-slate-100' >
                <TabList className="flex justify-center 'border-2 mt-3 flex-wrap">
                
                <Tab className="text-lg font-medium px-4 py-2 bg-gray-200 rounded-md mr-2 mb-2 cursor-pointer" >3x3x3 Category Cube</Tab>
                <Tab className="text-lg font-medium px-4 py-2 bg-gray-200 rounded-md mr-2 mb-2 cursor-pointer">2x2x2 Category Cube</Tab>
                <Tab className="text-lg font-medium px-4 py-2 bg-gray-200 rounded-md mr-2 mb-2 cursor-pointer">4x4x4 Category Cube</Tab>
                <Tab className="text-lg font-medium px-4 py-2 bg-gray-200 rounded-md mr-2 mb-2 cursor-pointer">5x5x5 Category Cube</Tab>
            
            </TabList>

                <TabPanel>
                    <Category3Container></Category3Container>
                </TabPanel>
                
                <TabPanel>
                    <Category2Container></Category2Container>
                </TabPanel>
                <TabPanel>
                    <Category4Container></Category4Container>
                </TabPanel>
                <TabPanel>
                    <Category5Container></Category5Container>
                </TabPanel>
                <TabPanel>
                    <Category5Container></Category5Container>
                </TabPanel>
            
        </Tabs>
        </div>
    );
};

export default CategoryTab;