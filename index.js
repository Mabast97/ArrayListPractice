class ArrayList
{
    constructor()
    {
        this.array = [...arguments];
    }

    push(element)
    {
        let lastPosition = this.array.length;
        this.array[lastPosition] = element;
        console.log("After pushed : " + this.array);
        return this.array;
    }

    pop()
    {
        let lastPosition = this.array.length;
        this.array.splice(lastPosition-1);
        console.log("After pop : " + this.array);
        return this.array;
    }

    unshift(element)
    {
        this.array.splice(0, 0, element);
        console.log("After unshifted : " + this.array);
        return this.array;
    }

    find(element)
    {
        for(let i=0; i<this.array.length; i++)
        {
            if(element == this.array[i])
            {
                console.log("Find : " + this.array[i]);
                break;
            }
        }
    }

    concat(concatingItem)
    {
        let newArr = [...this.array, concatingItem];
        console.log("After concating : " + newArr);
        return newArr;
    }

    clear()
    {
        console.log(this.array);
        return this.array = [];
    }

    map(func)
    {
        let newArray = [];
        for (let i=0; i<this.array.length; i++)
        {
            newArray.push(func(this.array[i]));
        }
        console.log("After mapping : " + newArray);
        return newArray;
    }
    
    filter(func)
    {
        let newArray = [];
        for (let i=0; i<this.array.length; i++)
        {
            if(func(this.array[i]) == true) 
            newArray.push(this.array[i]);
        }
        console.log(newArray);
        return newArray;
    }
    
    reduce(func)
    {
        let total = 0;
        for (let i=0; i<this.array.length; i++){
            total +=func(this.array[i]);
        }
        console.log("After reduce : " + total);
        return(total);
    } // !!!!!!!!!!!!!!!!!!!!!!!!!

}

let a = new ArrayList(12,23,90,2,1);
for (const e in a.array) { console.log(e); }

a.filter((element) => element>20 );
a.map((e) => e+2);
a.concat('newAdding');
a.find(22);
a.unshift("unshift");
a.push('hi');
a.pop();
a.clear();

// a.reduce( );   // !!!!!!!!!!