onmessage = e => {
    const data = e.data.split(" ");
    start(data[0], data[1], data[2]);
}

function create_matrix(n,m){
    const a = new Array(n);
    for(let i=0; i<n; i++){
        a[i] = new Float32Array(m);
        for(let j=0; j<m; j++) a[i][j] = Math.random();
    }
    return a;
}

function matrix_multiplication(n, m, p, a, b, c){
    for(let i=0; i<n; i++) 
        for(let j=0; j<p; j++){
            c[i][j] = 0;
            for(let k=0; k<m; k++) c[i][j] += a[i][k] * b[k][j];
        }
}

function delete_matrix(a, n){
    for(let i=0; i<n; i++) a[i].length = 0;
    a.length = 0;
}

function start(n, m, p){
    const a = create_matrix(n,m);
    const b = create_matrix(m,p);
    const c = create_matrix(n,p);

    const now = new Date().getTime();

    matrix_multiplication(n,m,p,a,b,c);

    const now2 = new Date().getTime();
    const time = now2 - now;

    delete_matrix(a, n);
    delete_matrix(b, m);
    delete_matrix(c, n);

    postMessage(time);
}