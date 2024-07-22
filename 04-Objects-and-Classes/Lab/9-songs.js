function solve(input) {
    class Song {
        constructor(name, time) {
            this.name = name;
            this.time = time;
        }

        print() {
            console.log(this.name);
        }
    }

    const count = input.shift();
    const songLibrary = {};
    const allSongs = [];

    for (let i = 0; i < count; i++) {
        const [typeList, name, time] = input.shift().split('_');

        if (!songLibrary[typeList]) {
            songLibrary[typeList] = [];
        }

        const newSong = new Song(name, time);
        songLibrary[typeList].push(newSong);
        allSongs.push(newSong);
    }

    const typeList = input.shift();

    if (typeList === 'all') {
        allSongs.forEach(song => song.print());
    } else {
        songLibrary[typeList].forEach(song => song.print());
    }
}

solve([4,
    'ban_hey_3:48',
    'programming_ban_3:42',
    'ban_hello_3:29',
    'like_like_3:05',
    'all']
);


