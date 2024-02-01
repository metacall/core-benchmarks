window.BENCHMARK_DATA = {
  "lastUpdate": 1706751023176,
  "repoUrl": "https://github.com/metacall/core",
  "entries": {
    "MetaCall Benchmark (ubuntu-latest)": [
      {
        "commit": {
          "author": {
            "email": "vic798@gmail.com",
            "name": "Vicente Eduardo Ferrer Garcia",
            "username": "viferga"
          },
          "committer": {
            "email": "vic798@gmail.com",
            "name": "Vicente Eduardo Ferrer Garcia",
            "username": "viferga"
          },
          "distinct": true,
          "id": "203a3e79c57d75bb2b7e3599bd65da64ced9d303",
          "message": "Solve issue of dependencies in windows.",
          "timestamp": "2024-01-31T23:12:27+01:00",
          "tree_id": "22ab1a5c14cbbf51a6aa13e9d3975d8028d1e7d8",
          "url": "https://github.com/metacall/core/commit/203a3e79c57d75bb2b7e3599bd65da64ced9d303"
        },
        "date": 1706741016445,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 873.4247519671499,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 882.2161000001163 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 861.2282719922746,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 870.6750000001491 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 862.0054580061378,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 870.1481000000277 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 861.5202849836123,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 870.2691000004386 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 866.9839510193924,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 877.1741000003806 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 865.0325435937135,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 874.0964800002224 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 862.0054580061378,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 870.6750000001491 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 5.249019966631765,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 5.416295816519641 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.0060680028809379834,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.006196450781403746 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 63.342613999964215,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 63.3228 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 177.167312999984,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 177.1688 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 511.21431300003906,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 510.969 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 250.57474666666243,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 250.48686666666663 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 177.167312999984,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 177.16880000000003 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 232.7847786678701,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 232.65518319696503 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.9290033483603272,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.9288119025680057 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 899.5637609999676,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 891.5024000000002 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1364.4842840000138,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1362.8969999999997 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1964.5979090000196,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1956.3761000000004 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 1409.5486513333337,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1403.5918333333336 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 1364.4842840000138,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1362.8969999999997 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 533.945251878799,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 533.6019596412128 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.3788058336076051,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3801688973738064 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2173.706689992912,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 969.2009999999784 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2285.2957479994984,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 758.6601999999767 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2307.9184510120854,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 841.9992999999765 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 2255.640296334832,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 856.6201666666439 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 2285.2957479994984,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 841.9992999999766 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 71.85251254509076,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 106.02916779228202 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.03185459696825031,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.1237761751569218 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2348.775632996194,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1039.7410999999713 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2987.01041600674,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1173.4834000002463 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2942.1512569960555,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1162.6286000000139 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 2759.3124353329963,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1125.2843666667438 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 2942.1512569960555,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1162.6286000000139 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 356.2421024969995,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 74.28118553697247 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.12910538797104645,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.06601103484357838 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0029560000029960065,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003000000000419334 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0026540000135355513,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.00259999999840943 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0030069999752413423,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0029999999995311555 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.002872333330590967,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0028666666661199733 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.0029560000029960065,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0029999999995311555 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00019079393935493298,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00023094010857987467 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.06642472073938514,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.08056050300834298 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.79422699997167,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.7940999999999998 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 328.1833500000175,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 75.5248 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 186.86800001432857,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 187.30000000000135 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 9.351179000020693,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9.140900000000007 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2466.986745043016,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2507.8202000001015 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2257.6727600223307,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2317.4517999995855 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2256.6367629919455,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2328.2868999991547 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2108.21358102163,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2174.563700000874 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2348.230086991009,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2419.1299999996777 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 2287.5479872139867,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2349.450519999879 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 2257.6727600223307,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2328.2868999991547 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 132.18306176623898,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 124.49237143191779 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.05778373284628894,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.052987866895755784 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1927.0297860178403,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1987.5942999987224 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2161.5209060159373,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2234.3324000000102 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2076.108825012966,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2144.0481999998974 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1805.2329499770394,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1856.6506999972319 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1698.861246990134,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1745.9146000007806 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1933.7507428027834,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1993.7080399993283 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1927.0297860178403,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1987.5942999987224 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 189.65767872454765,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 200.45319123569305 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.09807762423902538,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.10054290157537839 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2102.591880000716,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2076.2103000000584 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2160.576592990253,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2085.224499999779 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1949.0212900000756,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1989.3854000006686 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1816.0410400116689,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1867.4198000002473 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1820.5297059921008,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1870.0670999992326 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1969.7521017989632,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1977.6614199999967 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1949.0212900000756,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1989.3854000006681 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 158.41762338441453,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 106.24135507414499 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.08042515768341237,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.05372069961001977 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1639.3879080002307,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1674.7508000029416 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1415.4734430225062,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1447.2402000001487 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1742.3725980231097,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1788.2607999997902 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1554.939814013096,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1591.5952999995825 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1418.5698650106247,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1449.1616999971945 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1554.1487256139135,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1590.2017599999317 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1554.939814013096,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1591.5952999995823 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 141.69247653258796,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 147.23125653879688 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.09117047435509569,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.09258652596309741 ms\nthreads: 1"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "7854099+viferga@users.noreply.github.com",
            "name": "Vicente Eduardo Ferrer Garcia",
            "username": "viferga"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d49f5f1338500d58312e84417b9bd35dfd6ae537",
          "message": "Enable release tests in windows-test.yml",
          "timestamp": "2024-01-31T20:28:01-05:00",
          "tree_id": "5ca626516431412bbdf541f6a097ebf4a2f1a784",
          "url": "https://github.com/metacall/core/commit/d49f5f1338500d58312e84417b9bd35dfd6ae537"
        },
        "date": 1706751022904,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 889.5297239965885,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 856.4150000000649 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 873.2997109721339,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 866.0601999998725 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 859.7535970097283,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 867.0457999991901 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 867.3144050108874,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 871.5788999999959 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 864.0976670141356,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 872.4544000003247 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 870.7990208006947,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 866.7108599998895 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 867.3144050108874,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 867.0457999991901 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 11.577400075611163,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 6.3880032395514466 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.01329514595108962,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.007370397135155617 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 62.07129300000247,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 62.061400000000006 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 177.4938529999872,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 177.4638 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 486.02449599999886,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 485.9195 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 241.8632139999962,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 241.81489999999997 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 177.4938529999872,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 177.46380000000002 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 219.1840335429366,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 219.13402357304082 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.9062313773062656,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.9062056290701723 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 923.5420370000043,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 893.0539 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1350.1389959999983,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1344.7049 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1894.6631359999913,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1882.7552 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 1389.4480563333311,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1373.5046666666667 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 1350.1389959999983,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1344.7049 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 486.7524513538205,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 495.47879442561776 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.35032072565442324,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.36074052491433195 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2244.8599139993066,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1032.3974000000137 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2100.0715990001595,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 912.1783999999842 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 1909.7066510055072,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 906.1181999999883 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 2084.8793880016574,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 950.2313333333287 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 2100.0715990001595,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 912.1783999999842 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 168.0923254646574,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 71.22238685705285 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.08062448429008295,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.07495268189821833 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2030.1853410031754,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 927.0713999999178 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2746.736545003131,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1137.535799999884 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2849.8129359998356,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1205.6459999999606 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 2542.2449406687138,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1090.0843999999208 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 2746.7365450031307,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1137.535799999884 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 446.44144162751314,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 145.2228579210694 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.17560913761129598,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.13322166423176035 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0032659999931183847,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.002999999998642977 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0033260000122936617,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.003399999998876524 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0028850000148850086,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0029999999977547986 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.003159000006765685,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0031333333317581 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.0032659999931183847,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.002999999998642977 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00023917984287606393,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00023094010806708654 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.07571378359094913,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0737042898456983 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.6112770000186174,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.6115 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 403.5952299999792,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 76.33830000000002 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 186.87100001102408,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 187.29999999998748 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 9.655791000000136,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9.081499999999993 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2298.748185017928,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2335.7455000001405 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2161.8549120218518,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2221.61089999968 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2311.064807001827,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2349.565600000643 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2333.822295989819,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2405.7941999990717 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2177.0051649898505,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2255.644899999032 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 2256.499073004255,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2313.6722199997134 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 2298.748185017928,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2335.7455000001405 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 80.65061410952961,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 74.33787749775306 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.035741478946035236,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.032129822390209735 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2096.372671011977,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2164.719300000332 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2155.801286976555,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2231.6634000003005 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1677.1057230025974,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1732.8048000001672 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1553.0417679889013,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1601.8342000029122 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1451.5789479995647,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1494.3762000013655 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1786.780079395919,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1845.0795800010158 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1677.1057230025974,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1732.8048000001672 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 320.5643794883119,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 334.0596512392357 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.17940897326138167,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.1810543322142516 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1755.3471780001075,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1764.7349000000881 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1905.4367999967496,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1956.6591000005117 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2044.8764779888222,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1959.2436999998845 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1843.2679140182984,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1891.7302000009997 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1936.3231750149623,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1977.1544999995783 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1897.050309003788,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1909.9044800002125 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1905.4367999967496,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1956.6591000005114 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 107.7469150594595,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 87.38911505783044 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.05679707836322034,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.045755751647758164 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1434.171475991974,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1466.5767999956695 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1574.822473999518,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1618.2483000025734 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1613.8207539966345,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1660.9559000010704 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1438.4859190003851,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1472.7283999980293 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1476.4019580202046,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1517.4340000030604 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1507.5405162017432,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1547.1886800000807 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1476.4019580202046,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1517.4340000030604 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 82.07239799775684,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 87.92098642987284 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.05444125522048237,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.05682628600273127 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}