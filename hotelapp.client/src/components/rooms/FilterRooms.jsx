import { useMemo, useState } from 'react'

export default function FilterRooms({ rooms, setFilteredRooms }) {

    const [selectedLocation, setSelectedLocation] = useState('All')
    const [selectedCategory, setSelectedCategory] = useState('All')

    const availableLocations = useMemo(() => {
        return ['All', ...new Set(rooms.map((room) => room.location))]
    }, [rooms])

    const availableCategories = useMemo(() => {
        return ['All', ...new Set(rooms.map((room) => room.category))]
    }, [rooms])

    const applyFilters = (location, category) => {
        let filteredRooms = rooms
        if (location !== 'All') {
            filteredRooms = filteredRooms.filter(room => room.location === location)
        }
        if (category !== 'All') {
            filteredRooms = filteredRooms.filter(room => room.category === category)
        }
        setFilteredRooms(filteredRooms)
    }

    const handleLocationChange = (e) => {
        const location = e.target.value
        setSelectedLocation(location)
        applyFilters(location, selectedCategory)
    }

    const handleCategoryChange = (e) => {
        const category = e.target.value
        setSelectedCategory(category)
        applyFilters(selectedLocation, category)
    }

    return (
        <div style={{ display: 'flex' , gap: '1rem'}}>
            <div>
                <label>Search by location</label>
                <select value={selectedLocation} onChange={handleLocationChange}>
                    {availableLocations.map((location, index) => 
                        <option key={index} value={location}>{location}</option>
                    )}
                </select>
            </div>
            <div>
                <label>Search by category</label>
                <select value={selectedCategory} onChange={handleCategoryChange}>
                    {availableCategories.map((category, index) => 
                        <option key={index} value={category}>{category}</option>
                    )}
                </select>
            </div>
        </div>
    )
}
