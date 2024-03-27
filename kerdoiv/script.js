function valaszokatOsszesit(tantargyak) {
    let statisztika = {}
    for (const tantargy of tantargyak) {
        let targy = tantargy.toLowerCase()
        if (targy in statisztika) {
            statisztika[targy]++
        } else {
            statisztika[targy] = 1
        }
    }
    return statisztika
}

let adatok = [
    'Indiszkret Matematika', 'Kalkulus III', 'Tavolito es valosagos szamitasok',
    'kalkulus iii', 'tavolito es valosagos szamitasok',
    'TAVOLITO ES VALOSAGOS SZAMITASOK', 'kalkulus iii', 'Kalkulus III', 
    'Indiszkret Matematika', 'tAvOlItO Es vAlOsAgOs sZaMiTaSoK', 
    'Kaveautomatak es informalis nyelvek', 'tavolito es valosagos szamitasok'
]

console.log(valaszokatOsszesit(adatok))