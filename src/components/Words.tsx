import PixelWriting from './PixelWriting';
import {ALPHABAT, DEFAULT_FONT_SIZE, NUM, SPECIAL_WORDS} from '../configs/configs';

export default function Words() {
    const FONT_SIZE = DEFAULT_FONT_SIZE;

    return (
        <div>
            <PixelWriting str={ALPHABAT} fontProps={{size: FONT_SIZE}} />
            <PixelWriting str={NUM} fontProps={{size: FONT_SIZE}} />
            <PixelWriting str={SPECIAL_WORDS} fontProps={{size: FONT_SIZE}} />
            <PixelWriting str={'heartis.me'} fontProps={{size: FONT_SIZE}} />
            <PixelWriting str={'My name is\nGimgongta.'} fontProps={{size: FONT_SIZE}} />
        </div>
    );
}
