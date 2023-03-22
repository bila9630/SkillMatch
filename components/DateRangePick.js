import { useState } from 'react';
import { DateRangePicker } from '@mantine/dates';

export default function DateRangePick() {
    const [date, setDate] = useState([
        new Date(2022, 12, 1),
        new Date(2022, 12, 5),
    ]);

    return (
        <DateRangePicker
            placeholder=""
            value={date}
            onChange={setDate}
            style={{ width: '300px', marginTop: '10px', marginBottom: '10px' }}
        />
    )
}