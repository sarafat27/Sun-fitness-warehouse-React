import { useEffect, useState } from "react";

const useEquipment = () => {
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/equipment')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, []);
    return [equipments, setEquipments];
}
export default useEquipment;