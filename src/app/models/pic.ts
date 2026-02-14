export class Pic {


    constructor(public title: string,
                public description: string,
                public createdAt: Date,
                public likes: number,
                public imageUrl: string,
                public location?: string){}

    addLike(): void {
        this.likes++;
    }

    removeLike(): void {
        this.likes--;
    }

    setLocation(location: string): void {
        this.location = location;
    }
}