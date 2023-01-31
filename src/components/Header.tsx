import React, { useState } from 'react'
import { Input, Button  } from '@mui/material';

const Header = () => {
    const [search, setSearch] = useState<string>('')
    return (
        <div>
            <Input
                type='text'
                value={search}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
                placeholder='Search collections' />
                <Button>Logout</Button>
        </div>
    )
}

export default Header