import { useEffect, useState } from "react";

const useEquipment = () => {
    const [equipments, setEquipments] = useState([]);

    useEffect(() => {
        fetch('https://vast-fjord-33950.herokuapp.com/equipment')
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, []);
    return [equipments, setEquipments];
}
export default useEquipment;