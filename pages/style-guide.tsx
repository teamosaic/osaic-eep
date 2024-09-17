import classNames from 'classnames';
import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../tailwind.config';

export default function StyleGuidePage() {
  const config = resolveConfig(tailwindConfig);
  const colors = config.theme.colors;
  const colorLabels = Object.keys(colors);

  const spacingFilter = ['xxs', 'xs', 'sm', 'md', 'lg']
  const spacing = config.theme.spacing;
  const spacingLabels = Object.keys(spacing);

  // make clamped values more readable
  const formatClamp = function(val) {
    let splitVal = val.split(',');
    return (splitVal[0] + ', ' + splitVal[2]).replace('clamp', 'fluid')
  }

  return (
    <>
      <div className="p-xs flex items-start md:flex-nowrap">
        <div className="w-full md:w-1/2 md:mr-[10px]">

          <StyleGuideSegment heading="Headings">
            <h1 className="style-h1">Heading 1</h1>
            <StyleGuideDescription label={formatClamp(config.theme.fontSize.h1)} />
            <h2 className="style-h2">Heading 2</h2>
            <StyleGuideDescription label={formatClamp(config.theme.fontSize.h2)} />
            <h3 className="style-h3">Heading 3</h3>
            <StyleGuideDescription label={formatClamp(config.theme.fontSize.h3)} />
            <h4 className="style-h4">Heading 4</h4>
            <StyleGuideDescription label={formatClamp(config.theme.fontSize.h4)} />
            <h5 className="style-h5">Heading 5</h5>
            <StyleGuideDescription label={formatClamp(config.theme.fontSize.h5)} />

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et tincidunt diam. Pellentesque eu justo nisl. Phasellus et ex nec turpis mattis bibendum ac a nulla.</p>
          </StyleGuideSegment>

          <StyleGuideSegment heading="Spacing">

            {spacingLabels
              .filter(label => spacingFilter.includes(label))
              .map((label, index) => (
                <StyleGuideSpacing
                  key={index}
                  label={label}
                  value={formatClamp(spacing[label])}
                />
              ))
            }

          </StyleGuideSegment>

        </div>

        <div className="w-full md:w-1/2 md:ml-[10px]">
          <StyleGuideSegment heading="Colors">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {colorLabels
                .filter(label => typeof colors[label] === 'string')
                .map((label) => (
                  <StyleGuideSwatch
                    key={label}
                    color={colors[label]}
                    label={label}
                  />
                ))
              }
            </div>

          </StyleGuideSegment>
        </div>
      </div>
    </>
  );
}

type StyleGuideHeadingProps = { label: string };
export function StyleGuideHeading({ label }: StyleGuideHeadingProps): React.ReactElement {
  return (
    <div className="bg-primary py-3 px-6 text-xl mb-3 text-secondary">
      <span>{label}</span>
    </div>
  );
}

type StyleGuideDescriptionProps = { label: any };
export function StyleGuideDescription({ label }: StyleGuideDescriptionProps): React.ReactElement {
  return (
    <div className="my-3 font-mono bg-black/5 text-[12px] font-bold p-3 rounded-[10px]">
      <span>{label}</span>
    </div>
  );
}

type StyleGuideSegmentProps = { heading: string; children: React.ReactNode };
export function StyleGuideSegment({ heading, children }: StyleGuideSegmentProps): React.ReactElement {
  return (
    <div className="border-2 border-primary rounded-[10px] overflow-hidden mb-md">
      <StyleGuideHeading label={heading} />
      <div className="p-3">
        {children}
      </div>

    </div>
  );
}

type StyleGuideSwatchProps = { color: any; label: string; };
export function StyleGuideSwatch({ color, label }: StyleGuideSwatchProps): React.ReactElement {
  return (
    <div className="m-3">
      <div className="aspect-[16/9] rounded-[7px]" style={{backgroundColor: color}}></div>
      <StyleGuideDescription label={label + ' ' + color} />
    </div>
  );
}



type StyleGuideSpacingProps = { label: string, value: string };
export function StyleGuideSpacing({ label, value }: StyleGuideSpacingProps): React.ReactElement {
  return (
    <div className="my-6">
      <div className={classNames('block bg-black rounded-[10px]',
        {
          'h-xxs': label == 'xxs',
          'h-xs': label == 'xs',
          'h-sm': label == 'sm',
          'h-md': label == 'md',
          'h-lg': label == 'lg',
        }
      )}>

      </div>
      <p className="font-bold">{label}</p>
      <StyleGuideDescription label={value} />

    </div>
  );
}
