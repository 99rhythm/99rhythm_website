import { Release, Artist } from './types';

export const RELEASES: Release[] = [
  {
    id: 1,
    title: 'Stop Crying EP',
    artist: 'Michael Cruxell',
    releaseDate: '2024.07.05',
    description: 'The debut release on 99Rhythm. A statement of intent with raw, distorted kicks and hypnotic, looping synth lines.',
    imageUrl: 'https://i1.sndcdn.com/artworks-00232d5f-8372-4354-bc62-64400ebee16c-0-t1080x1080.jpg',
    soundcloudEmbed: `<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1845610965&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/michaelcruxell" title="Michael Cruxell" target="_blank" style="color: #cccccc; text-decoration: none;">Michael Cruxell</a> · <a href="https://soundcloud.com/michaelcruxell/sets/stop-crying-ep-1" title="Stop Crying Ep" target="_blank" style="color: #cccccc; text-decoration: none;">Stop Crying Ep</a></div>`,
    bandcampUrl: 'https://michaelcruxell.bandcamp.com/album/stop-crying-ep',
  },
  {
    id: 2,
    title: 'Pesa',
    artist: 'Michael Cruxell',
    releaseDate: '2024.11.29',
    description: 'The debut release on 99Rhythm. A statement of intent with raw, distorted kicks and hypnotic, looping synth lines.',
    imageUrl: 'https://i1.sndcdn.com/artworks-2ada6ead-ea6b-480f-a883-5e3caeddb902-0-t1080x1080.jpg',
    soundcloudEmbed: `<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A1912888287&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/michaelcruxell" title="Michael Cruxell" target="_blank" style="color: #cccccc; text-decoration: none;">Michael Cruxell</a> · <a href="https://soundcloud.com/michaelcruxell/sets/pesa-215462966" title="Pesa" target="_blank" style="color: #cccccc; text-decoration: none;">Pesa</a></div>`,
    bandcampUrl: 'https://michaelcruxell.bandcamp.com/album/pesa',
  }
];

export const ARTISTS: Artist[] = [
    {
        id: 1,
        name: 'Michael Cruxell',
        subtitle: 'DJ/Producer from Romania. ',
        bio: `My music is not just about beats; it's a personal connection. Each track is a piece of me, inviting you to feel the intensity, embrace the groove, and lose yourself in the heart of techno!`,
        imageUrl: '/images/cruxell.jpg'
    }
];