window.BENCHMARK_DATA = {
  "lastUpdate": 1706804363004,
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
      },
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
          "id": "be9fe069faf5a4a28e3e35789ea36ef7a897baf4",
          "message": "Update version to v0.7.7.",
          "timestamp": "2024-02-01T16:34:48+01:00",
          "tree_id": "08a8140287551d37521d7890d510c5495e2caae9",
          "url": "https://github.com/metacall/core/commit/be9fe069faf5a4a28e3e35789ea36ef7a897baf4"
        },
        "date": 1706804143000,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 850.220438003987,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 854.4200000000376 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 850.5416969770749,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 854.129900000006 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 851.130476005352,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 855.064699999859 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 848.6081950028108,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 852.0101000005891 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 855.5314199978454,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 853.4758999999941 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 851.206445197414,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 853.8201200000973 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 850.5416969770749,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 854.1299000000059 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 2.592112208131358,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1.1618367833988739 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.003045221547318275,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0013607512357506188 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 63.18641300001104,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 63.1544 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 174.20706100000416,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 174.207 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 359.77148000000625,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 359.3274 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 199.05498466667382,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 198.89626666666663 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 174.20706100000416,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 174.207 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 149.8457205753851,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 149.62212870646286 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.7527855724201442,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.752262127459722 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 882.0397439999965,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 879.0575000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1362.3481470000058,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1333.9240000000002 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1870.2890539999828,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1860.8401999999996 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 1371.5589816666616,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1357.9405666666667 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 1362.3481470000058,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1333.9240000000002 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 494.18903699425096,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 491.33177600340804 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.36031191046099453,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.3618212667506347 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2184.892871999864,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1028.1944000000128 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2158.042249002335,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1020.0807000000013 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2169.4322029999284,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 987.0901999999675 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 2170.789108000709,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1011.7884333333271 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 2169.4322029999284,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1020.0807000000015 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 13.476642097602387,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 21.77062422772003 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.006208176578707058,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.021516972828002114 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2230.7490640040724,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 995.1871999999189 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2837.9342379971035,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1144.6200999999344 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2357.805558005026,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1010.3377000000755 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 2475.496286668734,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1050.0483333333093 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 2357.8055580050263,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1010.3377000000755 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 320.2448900283706,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 82.25113190952834 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.12936593431910293,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.07833080563865809 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002847000018846302,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.002500000000793534 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0026440000340244296,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0024999999990171773 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0025439999831178284,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0023999999996249244 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.00267833334532952,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0024666666664785453 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.0026440000340244296,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0024999999990171773 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00015439021216301897,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.000057735027080871456 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.057644136205915054,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.02340609206159783 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.7992510000178754,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.7992000000000004 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 626.4618430000155,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 76.36040000000001 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 190.69600000420905,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 190.99999999999673 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 9.59238699999787,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 9.293399999999993 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2533.799176009154,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2545.5931000002106 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2247.852378024305,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2317.2960999996076 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2321.488830001641,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2360.530799999963 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2342.694965004682,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2372.109000000421 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2337.3951160039323,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2367.0950999995116 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 2356.646093008743,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2392.5248199999432 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 2337.395116003933,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2367.095099999512 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 106.09023808420136,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 88.28413268594682 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.04501746715339653,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.03689998613512771 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2122.5197510155454,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2148.953899999185 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2075.950232000054,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2106.2382999980364 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1631.1958959660728,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1671.0724999990916 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1595.8661800073344,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1636.0269000000508 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1499.6387350099951,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1534.8105999994673 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1785.0341587998003,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1819.420439999166 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1631.1958959660728,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1671.0724999990914 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 291.30309380083514,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 286.13801255436306 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.16319188759765693,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.15726876881436716 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1756.075851990829,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1772.3345000000684 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1757.9675239957453,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1774.4180999997593 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1800.5777890225545,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1769.6568000001812 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1597.3172519781258,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1631.1776000002922 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1874.5115709811273,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1913.3782000000697 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1757.2899975936766,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1772.193040000074 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1757.9675239957455,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1772.3345000000686 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 101.49869788027584,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 99.78728268024437 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.05775864997767121,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.056307230887353114 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1706.343304998967,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1732.898300000686 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1709.8343760014814,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1735.8436999997355 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1710.349918990829,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1737.1880999993082 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1706.1082730023145,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1731.6855999999632 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1710.2491759836198,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1736.1705000020038 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1708.5770097954423,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1734.7572400003396 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1709.8343760014814,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1735.8436999997357 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 2.1566417772710524,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2.3440035042691347 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.0012622444085966331,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.0013511997242154042 ms\nthreads: 1"
          }
        ]
      },
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
          "distinct": false,
          "id": "be9fe069faf5a4a28e3e35789ea36ef7a897baf4",
          "message": "Update version to v0.7.7.",
          "timestamp": "2024-02-01T16:34:48+01:00",
          "tree_id": "08a8140287551d37521d7890d510c5495e2caae9",
          "url": "https://github.com/metacall/core/commit/be9fe069faf5a4a28e3e35789ea36ef7a897baf4"
        },
        "date": 1706804362506,
        "tool": "googlecpp",
        "benches": [
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 850.2059820122838,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 858.9949999998922 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 930.3995100112843,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 866.3099000001895 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 885.068105992076,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 865.9818999998579 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 856.2713910194191,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 864.3106000001808 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5",
            "value": 855.2846719978788,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 863.6386000000238 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_mean",
            "value": 875.4459322065884,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 863.8472000000287 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_median",
            "value": 856.2713910194191,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 864.3106000001808 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_stddev",
            "value": 33.629140899850526,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2.9335956495959072 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_c_api_bench/call_object/iterations:1/repeats:5_cv",
            "value": 0.038413726836433223,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.003395965918041767 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 61.95029799999929,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 61.9508 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 176.81421800000408,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 176.81550000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3",
            "value": 499.93530199998304,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 499.7257000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_mean",
            "value": 246.23327266666215,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 246.164 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_median",
            "value": 176.81421800000408,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 176.81550000000001 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_stddev",
            "value": 227.09462740304048,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 226.97714996600436 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_macro/iterations:1/repeats:3_cv",
            "value": 0.9222743333735789,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.9220566369006206 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 897.3917449999931,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 895.2971 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1403.4748540000237,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1336.9845000000003 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3",
            "value": 1892.513594999997,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1867.6571999999996 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_mean",
            "value": 1397.7933980000046,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1366.6462666666666 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_median",
            "value": 1403.4748540000237,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1336.9845000000003 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_stddev",
            "value": 497.58525228705,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 486.8581993962332 ms\nthreads: 1"
          },
          {
            "name": "log_bench/call_va/iterations:1/repeats:3_cv",
            "value": 0.35597911179077435,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.35624302445409656 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2207.7680930053134,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1021.8979000000053 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2156.8652290034433,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1015.3516000000002 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3",
            "value": 2112.908883997818,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 989.1909000000587 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_mean",
            "value": 2159.180735335525,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1008.8134666666879 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_median",
            "value": 2156.865229003444,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1015.3516000000003 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_stddev",
            "value": 47.47197658158047,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 17.305991819667195 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_va_args/iterations:1/repeats:3_cv",
            "value": 0.02198610602840692,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.017154798574259215 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2399.703404998121,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1037.863800000053 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2939.8343329993963,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1210.3342000000953 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3",
            "value": 2544.9805439996,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1065.5709999999603 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_mean",
            "value": 2628.1727606657055,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1104.5896666667027 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_median",
            "value": 2544.9805439996,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 1065.5709999999603 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_stddev",
            "value": 279.5103996835252,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 92.61939311171004 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_array_args/iterations:1/repeats:3_cv",
            "value": 0.10635160818451153,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.08384959221210685 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.0030150000043249747,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0031000000006997652 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002894000004971531,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0030000000013075123 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3",
            "value": 0.002465000022766617,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.0023999999978485675 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_mean",
            "value": 0.002791333344021041,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0028333333332852817 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_median",
            "value": 0.002894000004971531,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.0030000000013075123 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_stddev",
            "value": 0.00028901613688787453,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.00037859389148550975 ms\nthreads: 1"
          },
          {
            "name": "metacall_node_call_bench/call_async/iterations:1/repeats:3_cv",
            "value": 0.10354053108953797,
            "unit": "ms/iter",
            "extra": "iterations: 3\ncpu: 0.13362137346774014 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/init/iterations:1/repeats:1",
            "value": 0.611472999992202,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 0.6115999999999999 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load/iterations:1/repeats:1",
            "value": 370.52544099998386,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 80.2697 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/load_warm/iterations:1/repeats:1",
            "value": 197.08800002149474,
            "unit": "us/iter",
            "extra": "iterations: 1\ncpu: 197.50000000000324 us\nthreads: 1"
          },
          {
            "name": "metacall_py_init_bench/destroy/iterations:1/repeats:1",
            "value": 11.869829000005439,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 11.572899999999997 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2499.6900720127824,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2548.5557999997795 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2337.388345008492,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2382.897999999971 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2063.4443519933825,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2107.9529999999177 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 2126.1048420022635,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2196.7117999988286 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1904.5709950047467,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1959.4920999997266 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 2186.2397212043334,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2239.1221399996457 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 2126.104842002263,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 2196.7117999988286 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 234.0561933676533,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 231.09393509864526 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.10705879647942669,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.1032073824694002 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2111.4385930083586,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2155.601399997279 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 2134.5029970012774,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 2168.5106000010705 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1876.1370800020813,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1929.9613000007164 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1621.2162470075668,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1666.0668000006176 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1690.6493740009125,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1738.7339999982992 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1886.7888582040391,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1931.7748199995963 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1876.1370800020813,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1929.9613000007164 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 235.02274749891058,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 231.30659652272294 ms\nthreads: 1"
          },
          {
            "name": "metacall_rb_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.12456229348450759,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.11973786702674344 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1784.1394340042598,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1771.5272999999786 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1775.483650987752,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1780.4553999998775 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1763.5121510323586,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1780.3464999998528 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1807.6659849960208,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1857.6343000007655 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5",
            "value": 1848.6329900044325,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1895.4408999995617 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_mean",
            "value": 1795.8868422049648,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1817.0808800000075 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_median",
            "value": 1784.13943400426,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1780.4553999998775 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_stddev",
            "value": 33.627803795291115,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 56.015269610481425 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_va_args/iterations:1/repeats:5_cv",
            "value": 0.018724901260484414,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.03082706456659276 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1696.7947670122783,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1745.7986000009064 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1624.0694149959154,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1675.5632000025678 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1688.223095971864,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1738.1241999989393 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1700.7691249954178,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1739.4804000002182 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5",
            "value": 1751.8882509986895,
            "unit": "ms/iter",
            "extra": "iterations: 1\ncpu: 1792.5158999979942 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_mean",
            "value": 1692.348930794833,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1738.296460000125 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_median",
            "value": 1696.7947670122783,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 1739.4804000002182 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_stddev",
            "value": 45.5925173989783,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 41.632088212185444 ms\nthreads: 1"
          },
          {
            "name": "metacall_py_call_bench/call_array_args/iterations:1/repeats:5_cv",
            "value": 0.026940376520086313,
            "unit": "ms/iter",
            "extra": "iterations: 5\ncpu: 0.023949935566331675 ms\nthreads: 1"
          }
        ]
      }
    ]
  }
}