import React from 'react';
import { MousePointer, TextCursor, RectangleHorizontal, Pencil, Circle } from 'lucide-react';

const Toolbar = () => {
  return (
    <div className='bg-white shadow-xl rounded-lg p-2 flex flex-col gap-3
                    fixed top-20 left-4 z-50'>
      <MousePointer size={24} className='cursor-pointer hover:bg-gray-200 p-1 rounded'/>
      <TextCursor size={24} className='cursor-pointer hover:bg-gray-200 p-1 rounded'/>
      <RectangleHorizontal size={24} className='cursor-pointer hover:bg-gray-200 p-1 rounded'/>
      <Circle size={24} className='cursor-pointer hover:bg-gray-200 p-1 rounded'/>
      <Pencil size={24} className='cursor-pointer hover:bg-gray-200 p-1 rounded'/>
    </div>
  );
}

export default Toolbar;
