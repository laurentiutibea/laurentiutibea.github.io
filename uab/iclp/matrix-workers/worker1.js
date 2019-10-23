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

function delete_matrix(a, n){
    for(let i=0; i<n; i++) a[i].length = 0;
    a.length = 0;
}

function start(n, m, p){
    const a = create_matrix(n,m);
    const b = create_matrix(m,p);
    const c = create_matrix(n,p);

    const now = new Date().getTime();

    const data = {a, b, c, n, m, p}
    const workers_number = 4;
    const res = new Array(workers_number);
    for(let i=0; i<workers_number; i++){
        res[i] = false;
        data.linie_start = Math.trunc(i * n / workers_number);
        data.linie_stop = Math.trunc((i + 1) * n / workers_number);
        const worker = new Worker("worker2.js");
        worker.id = i;
        worker.onmessage = e => {
            res[worker.id] = true;
            let all_res = true;
            for(let k=0; k<workers_number; k++) if(!res[k]){
                all_res = false;
                break;
            }
            if(all_res){
                const now2 = new Date().getTime();
                const time = now2 - now;

                delete_matrix(a, n);
                delete_matrix(b, m);
                delete_matrix(c, n);

                postMessage(time);
            }
        }
        const sir = JSON.stringify(data);
        worker.postMessage(sir);
    }
}