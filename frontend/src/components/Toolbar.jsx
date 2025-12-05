import React from 'react';
import { MousePointer,TextCursor,RectangleHorizontal ,Pencil  , Circle} from 'lucide-react';
const Toolbar = () => {
    return (
        <div className='bg-white  shadow-2xl max-w-10 rounded-lg py-2'>

            <MousePointer size={24} className='m-2 cursor-pointer hover:bg-gray-200 p-1 rounded'/>

         <TextCursor size={24} className='m-2 cursor-pointer hover:bg-gray-200 p-1 rounded'/>
        <RectangleHorizontal size={24} className='m-2 cursor-pointer hover:bg-gray-200 p-1 rounded'/>

            <Circle size={24} className='m-2 cursor-pointer hover:bg-gray-200 p-1 rounded'/>
            <Pencil size={24} className='m-2 cursor-pointer hover:bg-gray-200 p-1 rounded'/>    
        </div>
    );
}

export default Toolbar;
