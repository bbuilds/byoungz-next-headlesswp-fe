import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { InstagramFeed } from "@/src/components";
import { axe } from "vitest-axe";

const posts = [
  {
    id: "18109950946374775",
    media_url:
      "https://scontent-sin6-4.cdninstagram.com/v/t51.29350-15/435469714_761607712367521_481847989238554642_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=18de74&_nc_ohc=_gKAGZprXegQ7kNvgFc5ndX&_nc_ht=scontent-sin6-4.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfAYNmlw0-lzJ_WoL36ENydu59xSitoEgFl0RxjVC7uChA&oe=6635EC9E",
    media_type: "IMAGE",
    permalink: "https://www.instagram.com/p/C5UUnfHMP4e/",
    caption: "Those #nostalgic nights. #potd #poetrygram #spilledink",
  },
  {
    id: "18011841776059905",
    media_url:
      "https://scontent-sin6-2.cdninstagram.com/v/t51.29350-15/431775011_3650253055230609_4315723304285881138_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=18de74&_nc_ohc=66mkLIhYao0Q7kNvgF-LnuL&_nc_ht=scontent-sin6-2.cdninstagram.com&edm=ANo9K5cEAAAA&oh=00_AfBOZj2KnjDdehyOB0ITBN4qseJqWD0sGAfyfKKlmzlOkQ&oe=66360825",
    media_type: "IMAGE",
    permalink: "https://www.instagram.com/p/C4Wi4v6s39y/",
    caption: "Without a care\n.\n.\n.\n.\n.\n#byoungz #potd #writersofinstgram",
  },
  {
    id: "17976362533417759",
    media_url:
      "https://scontent-sin6-4.cdninstagram.com/o1/v/t16/f2/m69/An9YOgc0pQuMbQAm8tqlf1msQqcASdM93YxaQHYj5MnHQMpxTjeP_ze4E76AEH2oV1yTGVTboEdkiCUCjcUtCIy6?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=104&vs=377027250568825_3656066453&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HT0pXYkE2alJXSFJuM0VBQUdmdERwYi0xaFpnYnFfRUFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dJTGZhdzRYRWJ5Y2g2b1FBQlNYMTMzYW9ic2hicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJpjjuu%2FIus1AFQIoAkMzLBdAOOIMSbpeNRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfCSJDt6uh69SrtNxs3V72rTLCRW7HP32V8aCUyyCCIMVA&oe=66320332&_nc_sid=1d576d&_nc_rid=67003adade",
    media_type: "VIDEO",
    permalink: "https://www.instagram.com/reel/CTxPtUaImJJ/",
    caption:
      "All my cards are middle number cards which are pretty much some sort of conflict. Hit home after having to have to remove someone from my life I should have a while back. Someone who stopped bringing positivity in my life and made me feel used. Slowly but surely, I'm learning to let go of the shit that doesn't serve me. \n\nThinking: Four of Cups (contemplation, feeling disconnected, melancholy) Four is my favorite number but represents the first start of apathy in tarot. Whenever I'm stagnant, my thoughts easily become infected with melancholy. I have recently been reminded in the past few days that our individual callings are not just there for us to find, but to decide and to imagine.\n\nFeeling: Five of Swords (intimidation, conflict, hostility,) A constant battle I think so many people can relate to. I'm asked to feel the disagreement around me and see perspective. Something I feel often. Not only externally but internally. My story is very foreign to many people and stability is something I've never really had in my life. The few times I've somewhat obtained it, I pushed it away.\n\nDoing: Seven of Wands - reversed (admitting defeat, yielding, lack of self-belief) \"you are being too aggressive when you are protecting yourself and damaging your relationships by doing so\" You can't be hurt if you don't let anyone in. That's something someone expressed to me recently and it was sad to hear that realization. Something I've been doing all along but hard to admit.\n.\n.\n.\n.\n.\n#taroteverydamnday #tarotcardoftheday #cardreading #tarotgram #tarotofinstagram #lovetarot #onlinetarot #tarotcards #tarotreadersofinstagram #tarottribe",
  },
  {
    id: "17917335733927405",
    media_url:
      "https://scontent-sin6-4.cdninstagram.com/o1/v/t16/f2/m69/An8Ev0xnSPrASsSlSaGf_g421963URTlHkDQwawQ8kDM2VBsIK_DGwEF1FW64GUlCGkRTpwXetkle1PFbea1t-9m?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=111&vs=327284309147790_447266317&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSUNXbUFDdE96MUg4MjRCQUNNaTVVRUhrdUJIYnFfRUFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dNNjBhUTZGWjNsbllRUUNBQm1jN2RtM1lneFFicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJvSEpuq2yMk%2FFQIoAkMzLBdAOXMzMzMzMxgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfDISZLGxC5nvCfLOvB-jb0z4A4WzEdT2MJSppSMybLmOg&oe=66320914&_nc_sid=1d576d&_nc_rid=6d80105393",
    media_type: "VIDEO",
    permalink: "https://www.instagram.com/reel/CTsd5vOoNRX/",
    caption:
      "Thinking: Temperance - reversed- (imbalance, discord) Yesterday, I spent the night and early morning chatting with someone who for the first time in such a long time, stimulated my brain. I was absolutely fascinated in thought with her, and she kept asking me where I saw myself in a year, a few years, and how my path moving forward looked like. Honestly, I didn't know. I couldn't answer. I told her I didn't have a direction, that I was just going where I pleased. I've been thinking about this all day and am still not sure. I hope our paths cross again one day and I can give you a better answer.\n.\n.\nFeeling: Two of Pentacles (adaptation, resourcefulness, flexibility) I'm on week three of Greece now and I've really had to learn to be flexible. I'm not used to traveling with people and it can be frustrating sometimes to constantly be on other's agenda. I do take a step back and realize it's nice to not have to think and just be able to flow.\n.\n.\nDoing: Four of Wands (stability, belonging) - home for me has always been on the road. I get sick when I don't travel and depression kicks in. My home has always been nomadic and today I've been feeling so full. After my night last night, I finally felt whole. I'm with my best friend who I miss when she's not around. I've spent time around her beautiful family in foreign places. Last night I was fortunate enough to spend the night on the same wavelength with someone. I don't know how to be stationary but that's home for me.\n.\n.\n.\n.\n.\n@byoungz #byoungz #onlinetarot #cardreadings #tarotlife #dailytarotreading #cardreading #tarotlove #tarotdeck",
  },
  {
    id: "17903931140152079",
    media_url:
      "https://scontent-sin6-4.cdninstagram.com/o1/v/t16/f2/m69/An_Q4rmVOdPl23q7wUcCMWcLSmeENNoUFPak5KKi_eN9Mn9jqxxm1iZa0bdvD6v58q6_fMX__WLZaPFLFAfw7KGC?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=106&vs=286250949503292_4108003598&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSUNXbUFBdl9xNlFrWEFBQVBKMlVOTUV3aTl3YnFfRUFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dQRzdYdzZMZjh6T25BZ0tBRVZ3Zk9PUFNMdFNicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJqbegbrP4sQ%2FFQIoAkMzLBdAOpXCj1wo9hgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfAjP_JyJtIVEsvyk2sPiBjLT7FF8sN0dpu36ujw8-NHnw&oe=6631F881&_nc_sid=1d576d&_nc_rid=0f283170b1",
    media_type: "VIDEO",
    permalink: "https://www.instagram.com/reel/CTSW-GWIXVR/",
    caption:
      "⫸ Thinking: Four of Wands - reversed (instability, feeling unwelcome, transience) \nBefore this trip to Greece, I had a ton of thoughts of feeling unwelcome since I'm with a close friend's family I didn't really know for a week. Mostly I feel out of place since I come from a complete opposite background and am covered in tattoos. I was completely wrong on that and it feels silly now but it happens\n\n⫸ Feeling: Ten of Wands (obligation, burning out, struggles) \nThis card is pretty crazy to me. Today, while in Potmas in Greece, I visited a very religious place where John the Apostle wrote the book of revelations. Outside, there were a TON of vendors with the Nazar symbol (eye for protection) which this card depicts. What a bizarre feeling. I plan on meditating on this later.\n\n⫸ Doing: Two of Wands (first steps, making decisions, leaving comfort) \nComfort is a slow death.\n.\n.\n.\n.\n#byoungz @byoungz #tarotdeck #fortuneteller #tarotdaily #cardreading #tarotgram #onlinetarot #nazar",
  },
  {
    id: "18133992070210471",
    media_url:
      "https://scontent-sin6-4.cdninstagram.com/o1/v/t16/f2/m69/An8FMqllU3E400iMwq4jsEEgf9IAzzaBUpWQeeDxDhN90kfssGOOK_K7L3ZUngnYj7CgLpzA-AcwST_AatMfLW6p?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLmNsaXBzLnVua25vd24tQzMuNzIwLmRhc2hfYmFzZWxpbmVfMV92MSJ9&_nc_ht=scontent-sin6-4.cdninstagram.com&_nc_cat=106&vs=384267439882502_3275330315&_nc_vs=HBksFQIYOnBhc3N0aHJvdWdoX2V2ZXJzdG9yZS9HSjBCUXc1OFBManlXYlVBQUlkbi1QWkNrS0lNYnFfRUFBQUYVAALIAQAVAhg6cGFzc3Rocm91Z2hfZXZlcnN0b3JlL0dCYUZUQTZMRWItZ2Q3b0tBTVZwODF6VUI4RXhicV9FQUFBRhUCAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJrLr1uqm7sk%2FFQIoAkMzLBdAPJ41P3ztkRgSZGFzaF9iYXNlbGluZV8xX3YxEQB1AAA%3D&ccb=9-4&oh=00_AfCmlAUp0vvVOiy6JEEuGdEPQmHdjjaXFQSoT_aUUnfBIQ&oe=6631DE45&_nc_sid=1d576d&_nc_rid=31228419e7",
    media_type: "VIDEO",
    permalink: "https://www.instagram.com/reel/CS2J2kmFm3O/",
    caption:
      "Mmm my cards are calling out emotions and instances that are spot on today. The story today flows easily. \n.\n.\nThinking: Five of Pentacles (loss, isolation, feeling abandoned) I've been trying to shake these thoughts and I recently had a phone conversation with someone I have a 100% open and honest relationship. I was open about how I feel and where exactly the wind is pulling me. I know these are not necessarily true thoughts but that doesn't change how real they feel.\n.\n.\nFeeling: Page of Pentacles - Reversed (irresponsible, lazy, underachiever) When things don't go according to plan, I tend to take it personally and beat myself up over it. I've come a long way of sulking in these, but the page is meant to be a go getter.\n.\n.\nDoing: Four of Swords - (awakening, re-entering world, release from isolation) In one week I'm excited to put aside all the hard work I've been doing, and go enjoy myself. This card is my favorite number and my favorite suit. I've been feeling restless and maybe that's why I'm over connected on my first two cards.\n.\n.\n.\n.\n.\n#byoungz @byoungz #onlinetarot #cardreadings #tarotlife #dailytarotreading #pickacard #tarotdaily #tarotdeck #tarotonline",
  },
];

describe("InstagramFeed", () => {
  test("renders a InstagramFeed component", () => {
    const { getByText, getAllByAltText } = render(
      <InstagramFeed title={"Follow the adventure"} igPosts={posts} />,
    );
    expect(getByText("Follow the adventure")).toBeTruthy();
    expect(
      getAllByAltText("Those #nostalgic nights. #potd #poetrygram #spilledink"),
    ).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(
      <InstagramFeed title={"Follow the adventure"} igPosts={posts} />,
    );
    expect(await axe(container, { preload: false })).toHaveNoViolations();
  });
});
