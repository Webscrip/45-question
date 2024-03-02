

function make_great2(magicians: string[]): string[] {
    const greatmagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + ' the great');
}
return greatmagicians;}

const magicians3: string[] = ["faisal","mubashir","adeel"];

const greatmagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatmagicians2);