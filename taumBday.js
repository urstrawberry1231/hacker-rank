function taumBday(b, w, bc, wc, z) {
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);

    const effectiveBlack = bc < wc + z ? bc : wc + z;
    const effectiveWhite = wc < bc + z ? wc : bc + z;
    const total = (b * effectiveBlack) + (w * effectiveWhite);
    return total.toString();
}