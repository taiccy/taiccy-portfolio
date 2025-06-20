import { Card, CardContent } from '@/components/ui/card'
import {
  Briefcase,
  Building2,
  Heart,
  Palette,
  Store,
  Users,
  Utensils,
  Zap,
} from 'lucide-react'
import Link from 'next/link'

export default function ConsultationList() {
  const consultationItems = [
    {
      icon: Building2,
      title: '初めてホームページを作る企業様',
      description:
        '会社設立やリニューアルに伴い、初めてWebサイトを制作される企業様',
    },
    {
      icon: Store,
      title: '店舗・サロン経営者様',
      description:
        '美容室、カフェ、レストラン、クリニックなど実店舗をお持ちの事業者様',
    },
    {
      icon: Users,
      title: '集客に課題を感じている方',
      description:
        '既存のサイトからの問い合わせが少なく、集客力を向上させたい事業者様',
    },
    {
      icon: Briefcase,
      title: '士業・コンサルタント様',
      description: '弁護士、税理士、行政書士、経営コンサルタントなど専門職の方',
    },
    {
      icon: Heart,
      title: 'NPO・社会貢献団体様',
      description:
        '非営利団体や社会貢献活動を行う組織で情報発信を強化したい団体様',
    },
    {
      icon: Utensils,
      title: '飲食店・宿泊施設様',
      description:
        'レストラン、旅館、ホテルなどで予約システムや魅力的な紹介サイトが必要な事業者様',
    },
    {
      icon: Palette,
      title: 'デザインにこだわりたい方',
      description:
        'ブランドイメージを大切にし、オリジナリティのあるデザインを求める事業者様',
    },
    {
      icon: Zap,
      title: '短期間での制作をご希望の方',
      description:
        'イベントや新サービス開始に合わせて、スピーディーな制作が必要な事業者様',
    },
  ]

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            このようなお客様は
            <br className="sm:hidden" />
            ぜひご相談ください
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            様々な業種・規模の事業者様のホームページ制作をサポートいたします。
            <br />
            お客様のご要望に合わせた最適なソリューションをご提案します。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
          {consultationItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <Card
                key={index}
                className="group border-0 shadow-md transition-all duration-300 hover:shadow-lg"
              >
                <CardContent>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors duration-300 group-hover:bg-blue-200">
                        <IconComponent className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                        {item.title}
                      </h3>
                      <p className="leading-relaxed text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="mx-auto max-w-4xl rounded-2xl bg-blue-50 p-8">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              上記以外の業種・ご要望でもお気軽にお問い合わせください
            </h3>
            <p className="mb-6 text-gray-600">
              お客様の事業内容やご予算に応じて、最適なプランをご提案いたします。
              <br />
              まずは無料相談からお気軽にご連絡ください。
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="rounded-lg border-2 border-blue-600 px-8 py-3 font-medium text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white"
              >
                制作実績を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
