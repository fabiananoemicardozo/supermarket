export interface ProductProps {
   title: string;
   type?: string;
   description?: string;
   price?: number;
   rating?: number;
   image?: string;
   
} 

interface DataProps{
    data: any[] 
    onItemPress: (item:any) => void
  } 


