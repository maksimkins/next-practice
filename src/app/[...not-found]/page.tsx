import Link from 'next/link'
import classes from "./page.module.css";
import { Button } from '@/components/ui/button';
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className={classes.container}>
      <div>
        <h1>404 Page Not found</h1>
        <Image
          src="/not-found.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
          className={classes.imageContainer}/>

        <Button>
          <Link href={"/"}>Go back to Home</Link>
        </Button>
        
      </div>
    </div>
  )
}