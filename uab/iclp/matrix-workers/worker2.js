function matrix_multiplication(n, m, p, a, b, c, start_line, stop_line){
    for(let i=start_line; i<stop_line; i++) 
        for(let j=0; j<p; j++){
            c[i][j] = 0;
            for(let k=0; k<m; k++) c[i][j] += a[i][k] * b[k][j];
        }
}

onmessage = e => {
    const data = JSON.parse(e.data);
    matrix_multiplication(data.n, data.m, data.p, data.a, data.b, data.c, data.start_line, data.stop_line);
    postMessage(JSON.stringify(data.c));
}