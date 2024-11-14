import { Button } from '@/components/ui/button'
import { DialogTrigger } from '@/components/ui/dialog'
import { Edit } from 'lucide-react'

const DialogTriggerButtonEdit = () => {
    return (
        <DialogTrigger asChild>
            <Button variant='ghost' size='default'>
                <Edit />
            </Button>
        </DialogTrigger>
    )
}

export default DialogTriggerButtonEdit