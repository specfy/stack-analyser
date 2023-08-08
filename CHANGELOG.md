# [1.4.0](https://github.com/specfy/stack-analyser/compare/v1.3.6...v1.4.0) (2023-08-08)


### Bug Fixes

* dependencies 2023-07-16 ([#21](https://github.com/specfy/stack-analyser/issues/21)) ([0a9003f](https://github.com/specfy/stack-analyser/commit/0a9003fa563557218a723b1c7b2701f3cdb6fcf7))
* dependencies 2023-07-23 ([#26](https://github.com/specfy/stack-analyser/issues/26)) ([86c3bf4](https://github.com/specfy/stack-analyser/commit/86c3bf45193173bc2c450944aa173e32804957b2))
* namespace Vault to avoid conflict ([4f0ac2e](https://github.com/specfy/stack-analyser/commit/4f0ac2e82949bf214fb96a43424912e3046806ce))
* rename gomod to golang ([d4a0cd3](https://github.com/specfy/stack-analyser/commit/d4a0cd389506857cf14d5d5cd39bc4279328cdb3))
* rename rustcargo to rust since it's the official package manager ([31e3513](https://github.com/specfy/stack-analyser/commit/31e3513d1d62ede8dea9043c1ab64b9b0be0cee5))
* **rules:** add Fastly ([d816405](https://github.com/specfy/stack-analyser/commit/d8164054e64c6678bce2d697dea58bddffb0fa6f))
* **rules:** add GCP Ai Platform ([da08aef](https://github.com/specfy/stack-analyser/commit/da08aef300a83eec81b0a7f557d4c73b81304d45))
* **rules:** add GCP BigTable ([521dc76](https://github.com/specfy/stack-analyser/commit/521dc7684fc0124674906075de535dd2f5124946))
* **rules:** add GCP Cloud Build ([9e038c4](https://github.com/specfy/stack-analyser/commit/9e038c43a912e19c3a604ca676bb691c13c7969c))
* **rules:** add GCP Dataproc ([95267e5](https://github.com/specfy/stack-analyser/commit/95267e5055beed0afab90e511328bd635bb923f1))
* **rules:** add GCP Datastore ([849a31c](https://github.com/specfy/stack-analyser/commit/849a31c589842268270389ed6488499ddfe9ac40))
* **rules:** add GCP DNS ([bae5e74](https://github.com/specfy/stack-analyser/commit/bae5e74e2d804621d874820953df27ae11038947))
* **rules:** add GCP Functions ([dc51d87](https://github.com/specfy/stack-analyser/commit/dc51d87b1781f75aa5a1577ac4d0266289023468))
* **rules:** add GCP Language ([df0103c](https://github.com/specfy/stack-analyser/commit/df0103c884fdf5c98c55b48119004190e47ef7cc))
* **rules:** add GCP Secret Manager ([855ada5](https://github.com/specfy/stack-analyser/commit/855ada5708fc901a91723be49cf64200535c2c31))
* **rules:** add GCP Speech ([55020f6](https://github.com/specfy/stack-analyser/commit/55020f6f9e241a3a5ee71e78fa074336446fa8cf))
* **rules:** add GCP Translate ([8e29414](https://github.com/specfy/stack-analyser/commit/8e294141b86d0a855c3ea1c685dd28505dd5c137))
* **rules:** add GCP Vision ([5f8fcd5](https://github.com/specfy/stack-analyser/commit/5f8fcd5f5ae3129766cb34f601bd7edbb561f2fa))
* **rules:** add Google Maps ([adf585c](https://github.com/specfy/stack-analyser/commit/adf585ceb5b1ff9e2d0619e0d52656c1d09e438c))
* **rules:** add Puppeteer ([a737e2d](https://github.com/specfy/stack-analyser/commit/a737e2dcaa7c31c39b890ecb1f0376d73edb7a77))
* **rules:** broader match for DB ([9766a0d](https://github.com/specfy/stack-analyser/commit/9766a0df4746b229e819d8fe77a0f4178ffdc722))
* **rust:** cover more edge cases ([2c2276e](https://github.com/specfy/stack-analyser/commit/2c2276e794a8d0b4b1d3f116daf7506e84893978))


### Features

* Add support for Rust, update all previously declared packages ([e6fb2f0](https://github.com/specfy/stack-analyser/commit/e6fb2f0dd342108b5fdda97140408394dc1a87c0))
* **golang:** detect Service ([b60a8a3](https://github.com/specfy/stack-analyser/commit/b60a8a30497d43d6fd2c15ae3688192473c2db79))
* now support Ruby (dependencies only) ([57e162c](https://github.com/specfy/stack-analyser/commit/57e162cdb7c3e30a7ccb246ed2ccaf296eb6773a))
* **rules:** declare metadata along rules, auto generate list on prebuild ([c0077f3](https://github.com/specfy/stack-analyser/commit/c0077f3c8865474142aee4b00cb1e7d6529f54b3))
* support Deno (only dependencies) ([a12ec0d](https://github.com/specfy/stack-analyser/commit/a12ec0da253d03dac295395adf9868f870a299ca))

## [1.3.6](https://github.com/specfy/stack-analyser/compare/v1.3.5...v1.3.6) (2023-07-11)


### Bug Fixes

* remove github provider as it is more and more impossible to do it without the filesystem ([a87e769](https://github.com/specfy/stack-analyser/commit/a87e76982c3fc7076bd3d9d6de480c944dd81d9a))
* **rules:** add Okta ([56d0627](https://github.com/specfy/stack-analyser/commit/56d062703e683e759ac2d89e38a4afac8b9087d8))
* **rules:** add Slack ([c9eb2d9](https://github.com/specfy/stack-analyser/commit/c9eb2d9942b8c5fec9c9e2991f98a7dbcf3fcae4))
* **rules:** oci has an npm package ([259e7f5](https://github.com/specfy/stack-analyser/commit/259e7f50690124825ccc0c6fde5a1410f3ec0c9e))

## [1.3.5](https://github.com/specfy/stack-analyser/compare/v1.3.4...v1.3.5) (2023-07-11)


### Bug Fixes

* **rules:** introduce storage type to differentiate from hosting ([b0d642f](https://github.com/specfy/stack-analyser/commit/b0d642f52fb25bf1e919d949c79b68ffb7f24b0c))

## [1.3.4](https://github.com/specfy/stack-analyser/compare/v1.3.3...v1.3.4) (2023-07-09)


### Bug Fixes

* dedup dependencies, ignore docker variables ([7819bd9](https://github.com/specfy/stack-analyser/commit/7819bd98783d87f0aa3b2a826be5f9c9531ab949))
* dependencies 2023-07-09 ([#11](https://github.com/specfy/stack-analyser/issues/11)) ([b0e9dc2](https://github.com/specfy/stack-analyser/commit/b0e9dc2a73a90297686d6ed3266af0419a9b83d0))
* pin dependencies ([d5bf6e6](https://github.com/specfy/stack-analyser/commit/d5bf6e691089be859f98b2a92bc64c2e5edbc20c))
* remove unnecessary packages ([3c1cfcd](https://github.com/specfy/stack-analyser/commit/3c1cfcd8efb43d27896fd64ac0402a7b95e12966))
* **rules:** add Equinix ([47906e5](https://github.com/specfy/stack-analyser/commit/47906e54681fa4812f133913219cac76b9eacc2f))
* **rules:** add S3 ([733692b](https://github.com/specfy/stack-analyser/commit/733692b5c14ba0511309be34315b4d4bb489b7a9))
* **rules:** support for go.mod, combine dependencies when receiving a virtual Payload (only useful for lockfiles not attached to a service) ([c1b4820](https://github.com/specfy/stack-analyser/commit/c1b4820378dea609264bd834fb3929635547a603))
* **tf:** regex was too permissive ([7b3180b](https://github.com/specfy/stack-analyser/commit/7b3180bc505c991cbf7f8840dfcfa02dc8daf6fb))

## [1.3.3](https://github.com/specfy/stack-analyser/compare/v1.3.2...v1.3.3) (2023-07-06)


### Bug Fixes

* dependencies 2023-07-04 ([#2](https://github.com/specfy/stack-analyser/issues/2)) ([6a27bf8](https://github.com/specfy/stack-analyser/commit/6a27bf89b638181afc40b10d14c6a5fbd991985e))
* **rules:** add Sqlite ([494b585](https://github.com/specfy/stack-analyser/commit/494b58578963ee632d6944af9380274a120a545c))
* **rules:** support for yml->yaml ([145bbd8](https://github.com/specfy/stack-analyser/commit/145bbd8870d94ce1c6b0d2343e2b687358dbaf53))
* support more docker-compose filenames, use consola to support logLevel ([3e7c222](https://github.com/specfy/stack-analyser/commit/3e7c222a6675114a1cefe19f32df893ea1e92054))

## [1.3.2](https://github.com/specfy/stack-analyser/compare/v1.3.1...v1.3.2) (2023-07-04)


### Bug Fixes

* **rules:** add Cloudflare provider ([5567105](https://github.com/specfy/stack-analyser/commit/556710593390a39dd48039bfbf990f47e76ea847))
* **rules:** add CockroachDB ([712b0ca](https://github.com/specfy/stack-analyser/commit/712b0ca077d827a55df445824548049e15b53980))
* **rules:** add Gitlab ([b77f844](https://github.com/specfy/stack-analyser/commit/b77f844bfa486eb41be7ddae6d578fc8b76b47f4))
* **rules:** add OVH ([e3a8694](https://github.com/specfy/stack-analyser/commit/e3a8694ad8f56724b414ca8392c7766af7518791))
* **rules:** add Pagerduty ([6e2d034](https://github.com/specfy/stack-analyser/commit/6e2d034b7b0fff1381368e17f8b6eafd6bbbabbe))
* **rules:** add PrismaCloud ([4f428e4](https://github.com/specfy/stack-analyser/commit/4f428e412a4a9b5ab20aa4226703dd4f85c8af48))
* **rules:** add Scaleway ([d6fc701](https://github.com/specfy/stack-analyser/commit/d6fc701d595526927ba933522e18a312af24d9e1))
* **rules:** add Snowflake ([53ea5d7](https://github.com/specfy/stack-analyser/commit/53ea5d79873d35d29e98fde711daa538c35ba47f))
* **rules:** clean some incorrect rules ([3c862f6](https://github.com/specfy/stack-analyser/commit/3c862f62ce98261b2d6473b451c4cdc8b6586c2f))
* **snyk:** add terraform ([37439b3](https://github.com/specfy/stack-analyser/commit/37439b3557b32f22df0c91ddc34212cab0101f78))

## [1.3.1](https://github.com/specfy/stack-analyser/compare/v1.3.0...v1.3.1) (2023-07-03)


### Bug Fixes

* **edges:** remove unecessary properties ([c074e38](https://github.com/specfy/stack-analyser/commit/c074e3891d08c1298abb2ebfec444deea283fdd7))

# [1.3.0](https://github.com/specfy/stack-analyser/compare/v1.2.0...v1.3.0) (2023-07-01)


### Bug Fixes

* **rules:** add BigQuery ([2e99b69](https://github.com/specfy/stack-analyser/commit/2e99b698789ea2fd24c8140fe35dcdb95ccadc36))
* **rules:** add GCP Cloud Sql ([d81b1c0](https://github.com/specfy/stack-analyser/commit/d81b1c0f720ff3b7747cfe0fc1b5a6965e3f4fca))
* **rules:** add GKE ([272ee8e](https://github.com/specfy/stack-analyser/commit/272ee8e8c646a0635c21b39bdc492992dc2fcca1))


### Features

* remove group from output. it was abritrary and not useful ([02b2b48](https://github.com/specfy/stack-analyser/commit/02b2b48a21e2bbc9c10e15f0693714b161a0528d))

# [1.2.0](https://github.com/specfy/stack-analyser/compare/v1.1.6...v1.2.0) (2023-06-29)


### Bug Fixes

* **nested:** id was incorrect since it could be reused multiple times ([9c3784c](https://github.com/specfy/stack-analyser/commit/9c3784cb02fada733cab792d897eaddec66d7394))
* **rules:** add AppVeyor ([a25479d](https://github.com/specfy/stack-analyser/commit/a25479da8610c9561639cc86535f09c6a4666333))
* **rules:** add AzureCi ([a9baa7b](https://github.com/specfy/stack-analyser/commit/a9baa7b3e20f83dbf280e8a330e03f385212916d))
* **rules:** add CirrusCi ([5feaee1](https://github.com/specfy/stack-analyser/commit/5feaee19dbb66dd9cfebc9247513985eef6c3d2a))
* **rules:** add Firebase ([9ef7d9e](https://github.com/specfy/stack-analyser/commit/9ef7d9e5f180dcfa470857b07f1704aca7eaa713))
* **rules:** Add Gitlab CI ([37d39e2](https://github.com/specfy/stack-analyser/commit/37d39e20ef499455c5f5745a10de73931bfbb66b))
* **rules:** add Platform.sh ([8dd9bf3](https://github.com/specfy/stack-analyser/commit/8dd9bf395b3dd426351b841581093ddf5f7b6ed7))
* **rules:** add Snyk ([a6d4a1b](https://github.com/specfy/stack-analyser/commit/a6d4a1bac3cf16008170a923eef91b02de5314bf))
* **rules:** add StyleCi ([e076585](https://github.com/specfy/stack-analyser/commit/e07658529eab621640b689cf6faa227551cfdca8))
* **rules:** add variant for CircleCi ([f63447a](https://github.com/specfy/stack-analyser/commit/f63447ac1332bd03ea31ef42923badfabfd5210a))
* **rules:** allow to match multiple files and multiple resource per file ([3d202da](https://github.com/specfy/stack-analyser/commit/3d202da288d846cb2bc31843029e2beb5df9c700))
* **rules:** rename some to prepare for nested rule ([86360e3](https://github.com/specfy/stack-analyser/commit/86360e3ef5959c2c835de31178f5da812abc41bf))


### Features

* **rules:** detect Terraform resource name ([58327d6](https://github.com/specfy/stack-analyser/commit/58327d6b54aaab53cb2d877b710582c98a9c469b))
* **rules:** nested rules (dotted rules) automatically create the parent component associated ([88e06b2](https://github.com/specfy/stack-analyser/commit/88e06b2df5a982538f1e61bbef0be10fd8090fa8))

## [1.1.6](https://github.com/specfy/stack-analyser/compare/v1.1.5...v1.1.6) (2023-06-28)


### Bug Fixes

* dotted path, tests, proper parser for hcl ([8be13a6](https://github.com/specfy/stack-analyser/commit/8be13a65504b9fce70216a399fb793fee8a11e92))
* **tests:** use pre release that fix a bug with performance ([ef1b779](https://github.com/specfy/stack-analyser/commit/ef1b779a7fb0cf8023fe8fa2ca08a8c1be3c277c))

## [1.1.5](https://github.com/specfy/stack-analyser/compare/v1.1.4...v1.1.5) (2023-06-26)


### Bug Fixes

* **flatten:** allow to not merge ([412140d](https://github.com/specfy/stack-analyser/commit/412140d023642d3bb159b956b457daf13f0d6a53))

## [1.1.4](https://github.com/specfy/stack-analyser/compare/v1.1.3...v1.1.4) (2023-06-23)


### Bug Fixes

* **types:** missing export for AnalyserJson ([6e21d7f](https://github.com/specfy/stack-analyser/commit/6e21d7f463235c0a17624181566d18b26d844e29))

## [1.1.3](https://github.com/specfy/stack-analyser/compare/v1.1.2...v1.1.3) (2023-05-10)


### Bug Fixes

* clean up, add missing export, add documentation ([84b2080](https://github.com/specfy/stack-analyser/commit/84b20808ae66af6576e9967020568fc8b5bfd205))

## [1.1.2](https://github.com/specfy/stack-analyser/compare/v1.1.1...v1.1.2) (2023-05-10)


### Bug Fixes

* **action:** try to test it ([66994cb](https://github.com/specfy/stack-analyser/commit/66994cbcbd39a7df12816c4cd73dfbe62f8fc6d7))
* **docker:** do not remove terraform folder ([77be684](https://github.com/specfy/stack-analyser/commit/77be68499bf39114478d911d37532950d483ebd8))

## [1.1.1](https://github.com/specfy/stack-analyser/compare/v1.1.0...v1.1.1) (2023-05-09)


### Bug Fixes

* **cli:** set as executable ([0718ea4](https://github.com/specfy/stack-analyser/commit/0718ea45a075c2195b76abf0a644c98e2954c409))

# [1.1.0](https://github.com/specfy/stack-analyser/compare/v1.0.1...v1.1.0) (2023-05-09)


### Bug Fixes

* **release:** rename to .cjs ([c9d572f](https://github.com/specfy/stack-analyser/commit/c9d572fa80b96f086ea6c8bf44f1ef07f7916a2d))


### Features

* **cli:** working basic command + tests ([93355b3](https://github.com/specfy/stack-analyser/commit/93355b33af0dbc758c846518e17113b8e912b5cb))
* export to esm ([0601722](https://github.com/specfy/stack-analyser/commit/0601722ea4c47edbaed5e6c174b6d788db1af968))

## [1.0.1](https://github.com/specfy/stack-analyser/compare/v1.0.0...v1.0.1) (2023-05-05)


### Bug Fixes

* **release:** specfy public release ([e31dd4d](https://github.com/specfy/stack-analyser/commit/e31dd4dcb4cba5d4807c05c2715319da75e2a290))

# 1.0.0 (2023-05-05)


### Bug Fixes

* **ci:** also build in CI to catch typescript errors ([6fbfed7](https://github.com/specfy/stack-analyser/commit/6fbfed7de1035903f5150335e375da707c2e3f1d))
* **deps:** support more docker images ([1c87f7f](https://github.com/specfy/stack-analyser/commit/1c87f7fa943b90f7e71f7438bfdb01c1afad6ca4))
* **docker:** export every component anyway ([cf73701](https://github.com/specfy/stack-analyser/commit/cf737016fdb908da94f8161f50d2639bc80c2a87))
* flatten seems to work ([9d4f100](https://github.com/specfy/stack-analyser/commit/9d4f1000f3f9a453627b8e92c3d0e66b14169e45))
* **nodejs:** add more dependencies ([74ef1fe](https://github.com/specfy/stack-analyser/commit/74ef1fe8ae7597c250481c146790a82049d7562e))
* **payload:** move helpers directly into payload, sort components for easier snapshot, (tmp: broke edges) ([59c7529](https://github.com/specfy/stack-analyser/commit/59c75296c74b0bb68c4397c1583a40a0a42ecff2))
* store ref instead of id ([18781a0](https://github.com/specfy/stack-analyser/commit/18781a0d1ad2530720ea946c4552d566e9159c82))
* wrong path for coverage ([04b77f4](https://github.com/specfy/stack-analyser/commit/04b77f40f46b786856540aae622d3991637a19a8))


### Features

* add support for Terraform, rename tests ([1e83450](https://github.com/specfy/stack-analyser/commit/1e83450428587535b0dbd3545d29c4b20bb9faa3))
* **analyser:** find hosting and edges after analysis ([7b5398f](https://github.com/specfy/stack-analyser/commit/7b5398f56650f558513b324dc2abe5f3b905af0b))
* detect languages, payload is now mergeable ([a615b3a](https://github.com/specfy/stack-analyser/commit/a615b3a2c8c03d6866b5dde2d6bb6858f5c50a3f))
* parse docker ([af75f89](https://github.com/specfy/stack-analyser/commit/af75f894180fb578c90bf1a478dc6c577fe8db6e))
* **payload:** now is self-recursive and mergeable ([63f0daf](https://github.com/specfy/stack-analyser/commit/63f0dafab56c71222d2b9c4881e0140fa361b3a1))
* **payload:** output all dependencies found ([afc05b5](https://github.com/specfy/stack-analyser/commit/afc05b50ff4c6514c44d41e52e7cb8991f63e24b))
* **payload:** proper flatten ([375422d](https://github.com/specfy/stack-analyser/commit/375422d7287d4da881ca9975403ea99188944bb3))
* **payload:** use class to merge and output ([7dc8952](https://github.com/specfy/stack-analyser/commit/7dc8952d8e8eb7f044e0f87f02c82b71cc475985))
* **provider:** Github API provider ([1e3d47b](https://github.com/specfy/stack-analyser/commit/1e3d47b60986045988738590ae8f0797951dce72))
* **rules:** reuse code to match files ([cbe0413](https://github.com/specfy/stack-analyser/commit/cbe0413b2cc6a88eaff1a43df21d6727b8fbdc09))
* **rule:** support full path match, add github actions, cypress, kibana, github ([fd62a30](https://github.com/specfy/stack-analyser/commit/fd62a309afc22c0da140e1b6f9959a1568cdcad3))
* strongly type supported tech, simplify return to use uniq key, load package.json and detect some deps ([718011c](https://github.com/specfy/stack-analyser/commit/718011cd81e5a7ef9a8fa553721e50bafa74f2b8))

# 1.0.0 (2023-05-05)


### Bug Fixes

* **ci:** also build in CI to catch typescript errors ([6fbfed7](https://github.com/specfy/stack-analyser/commit/6fbfed7de1035903f5150335e375da707c2e3f1d))
* **deps:** support more docker images ([1c87f7f](https://github.com/specfy/stack-analyser/commit/1c87f7fa943b90f7e71f7438bfdb01c1afad6ca4))
* **docker:** export every component anyway ([cf73701](https://github.com/specfy/stack-analyser/commit/cf737016fdb908da94f8161f50d2639bc80c2a87))
* flatten seems to work ([9d4f100](https://github.com/specfy/stack-analyser/commit/9d4f1000f3f9a453627b8e92c3d0e66b14169e45))
* **nodejs:** add more dependencies ([74ef1fe](https://github.com/specfy/stack-analyser/commit/74ef1fe8ae7597c250481c146790a82049d7562e))
* **payload:** move helpers directly into payload, sort components for easier snapshot, (tmp: broke edges) ([59c7529](https://github.com/specfy/stack-analyser/commit/59c75296c74b0bb68c4397c1583a40a0a42ecff2))
* store ref instead of id ([18781a0](https://github.com/specfy/stack-analyser/commit/18781a0d1ad2530720ea946c4552d566e9159c82))
* wrong path for coverage ([04b77f4](https://github.com/specfy/stack-analyser/commit/04b77f40f46b786856540aae622d3991637a19a8))


### Features

* add support for Terraform, rename tests ([1e83450](https://github.com/specfy/stack-analyser/commit/1e83450428587535b0dbd3545d29c4b20bb9faa3))
* **analyser:** find hosting and edges after analysis ([7b5398f](https://github.com/specfy/stack-analyser/commit/7b5398f56650f558513b324dc2abe5f3b905af0b))
* detect languages, payload is now mergeable ([a615b3a](https://github.com/specfy/stack-analyser/commit/a615b3a2c8c03d6866b5dde2d6bb6858f5c50a3f))
* parse docker ([af75f89](https://github.com/specfy/stack-analyser/commit/af75f894180fb578c90bf1a478dc6c577fe8db6e))
* **payload:** now is self-recursive and mergeable ([63f0daf](https://github.com/specfy/stack-analyser/commit/63f0dafab56c71222d2b9c4881e0140fa361b3a1))
* **payload:** output all dependencies found ([afc05b5](https://github.com/specfy/stack-analyser/commit/afc05b50ff4c6514c44d41e52e7cb8991f63e24b))
* **payload:** proper flatten ([375422d](https://github.com/specfy/stack-analyser/commit/375422d7287d4da881ca9975403ea99188944bb3))
* **payload:** use class to merge and output ([7dc8952](https://github.com/specfy/stack-analyser/commit/7dc8952d8e8eb7f044e0f87f02c82b71cc475985))
* **provider:** Github API provider ([1e3d47b](https://github.com/specfy/stack-analyser/commit/1e3d47b60986045988738590ae8f0797951dce72))
* **rules:** reuse code to match files ([cbe0413](https://github.com/specfy/stack-analyser/commit/cbe0413b2cc6a88eaff1a43df21d6727b8fbdc09))
* **rule:** support full path match, add github actions, cypress, kibana, github ([fd62a30](https://github.com/specfy/stack-analyser/commit/fd62a309afc22c0da140e1b6f9959a1568cdcad3))
* strongly type supported tech, simplify return to use uniq key, load package.json and detect some deps ([718011c](https://github.com/specfy/stack-analyser/commit/718011cd81e5a7ef9a8fa553721e50bafa74f2b8))
