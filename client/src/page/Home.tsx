import React from 'react'
// import { Button } from "@/components/ui/button"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
 
const formSchema = z.object({
 tache: z.string().min(5).max(50),
})
const Home:React.FC = () =>{
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
         tache: "",
        },
      })
     
      // 2. Define a submit handler.
      function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }
    
  return (
    <div>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 bg-blue-200 p-4 roumded-sm flex items-center justify-between">
        <FormField
          control={form.control}
          name="tache"
          render={({ field }) => (
            <FormItem className=' items-center w-[80%]'>
              <FormLabel>Tache</FormLabel>
              <FormControl>
                <Input placeholder="enter une tache" className='' {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit">creer</Button>
      </form>
    </Form>
    </div>
  )
}

export default Home
