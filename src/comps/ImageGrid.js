import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className="img-grid">
      {docs && docs.map(doc => (
        <motion.div className='img-wrap' key={doc.id}
        //make sure to remember to use 'motion' inside element tag
        layout
        whileHover={{ opacity: 1 }} 
        onClick={() => setSelectedImg(doc.url)}>
          <motion.img src={doc.url} alt="defualt alt" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          />
        </motion.div>
      ))}
    </div>
  )
  
}

export default ImageGrid;