
import React, { useEffect, useState } from 'react'

import { Badge, Box, Button, ButtonGroup, Flex, IconButton, Progress, Text, useColorMode } from '@chakra-ui/react';
import Link from 'next/link';
import { StarIcon } from '@chakra-ui/icons';
import convertDate from '@/utils/formatDate';




export default function SingleRepo({repos}) {
  const nextPageDisabled=Math.ceil((repos?.length)/3)
  const {colorMode} =useColorMode()

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage=3


const handlePageChange = (selectedPage) => {
  console.log(selectedPage,'page dekho')
  
  setCurrentPage(selectedPage);
  
};
const startIndex=(currentPage)*itemsPerPage
const endIndex=startIndex+itemsPerPage
const subsets=repos?.slice(startIndex,endIndex)



  
    return (<div className='each_repo_div'>

{subsets?.map((itr,index)=>{
 
   
    return <>
    <div className='custom_scrollbar'key={index}>
      <div id='selected_repo_div'className='selected_repo_div'>
           <Flex className='each_repo_details'>
           <Box ml='3'>
       <Link className={colorMode==='dark'?'text-blue-300 repo_heading':'text-blue-600 repo_heading'}fontSize='3xl'href={`/pages/repos/${itr.id}`}>
        {itr.name}
          <Badge ml='5' className={colorMode==='dark'?'bg-sky-500':'bg-blue-500'}>
           Default
         </Badge>
    </Link>
       <Text fontSize='xl'className='mr-5'>{itr.description}</Text>
       <Text fontSize='sm'>Updated on {convertDate(itr.updated_at)}</Text>
       
     </Box>
                
    
  <ButtonGroup size='sm' isAttached variant='outline' className='mt-8'>
      <Button className={colorMode==='dark'?'bg-slate-500 text-slate-300 ':'bg-zinc-100 text-slate-200'}>Star</Button>
  <IconButton  icon={<StarIcon/>} size='sm'className={colorMode==='dark'?'bg-slate-500 text-slate-300 ':'bg-zinc-100 text-slate-200'}/>
   </ButtonGroup>
    </Flex>
    </div>

  <Progress value={100} size='xs' colorScheme='light-blue' className='mt-5 progress_bar'/>
 
    </div>
   
 </>
})}
<>
 <Button
 onClick={()=>handlePageChange(currentPage-1)}
 isDisabled={currentPage===0}
 className={colorMode==='dark'?'pagination_button dark':'pagination_button light'}

 >
  Previous Page

 </Button>
 <Button
 onClick={()=>handlePageChange(currentPage+1)}
 isDisabled={currentPage===nextPageDisabled}


 className={colorMode==='dark'?'pagination_button dark':'pagination_button light'}
 
 >
  Next Page

 </Button>
 </>

 {/* <div>
  <Pagination itemsPerPage={3}items={repos}/>
 </div> */}

    </div>)
 
}
