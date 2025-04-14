# Render.com Cron Yapılandırması

Bu proje, farklı saatlerde farklı `.jar` dosyalarının çalışması için yapılandırılmıştır.

## Günlük 08:15 Türkiye Saati (UTC 05:15)

- run_testGetSuat_1.sh
- run_testGet_murat.sh
- run_testGetBeyza.sh
- run_testGetOmer.sh

## Günlük 03:00 Türkiye Saati (UTC 00:00)

- run_test_project_03_00.sh

## Render'da Cron Tanımlarken:
- New Background Job oluşturun
- Environment: Docker
- Command: örnek: `bash run_testGetSuat_1.sh`
- Schedule (UTC):  
  - `15 5 * * *` → 08:15 TR  
  - `0 0 * * *` → 03:00 TR
