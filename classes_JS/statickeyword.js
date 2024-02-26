class MathUtil{
    static PI = Math.PI.toFixed(5)

    static getDiameter(radius){
        return radius * 2
    }
    static getcircumference(radius){
        return (radius * 2 * this.PI).toFixed(2)
    }

    static getArea(radius){
        return this.PI * radius * radius
    }
}

console.log(MathUtil.getArea(10))